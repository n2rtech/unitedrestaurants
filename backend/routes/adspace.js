const express = require('express');
const router = express.Router();
const AdSpace = require('../models').AdSpace;
const {DB} = require('../config/database');
const passport = require('passport');
require('../config/passport')(passport);
const path = require('path');
var fs = require('fs');
const sharp = require("sharp");
const Sequelize = require('sequelize');
const Op = require('sequelize').Op

var multer  = require('multer');

const imageStorage = multer.diskStorage({
    destination: 'uploads/adspaces', 
      filename: (req, file, cb) => {
        var image_na = file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname);
          cb(null, image_na);
          // AdSpace.create({image:image_na,link:req.body.link,user_id:req.user.id});
    }
});

const imageUpload = multer({
      storage: imageStorage,
      limits: {
        fileSize: 1000000000000000000
      },
      fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) { 
           return cb(new Error('Please upload a Image'))
         }
       cb(undefined, true)
    }
}) 

// Create a new AdSpace
router.post('/', passport.authenticate('vendor', {
    session: false
}), imageUpload.single('image'),  async (req, res) => {
        if (!req.file) {
            res.status(400).send({
                msg: 'Please pass Image.'
            })
        } else {


            const filename = req.file.originalname.replace(/\..+$/, "");
        const newFilename = `adspace-${filename}-${Date.now()}.jpg`;
        await sharp(req.file.path)
        .resize(840, 420, {
            fit: sharp.fit.inside,
            withoutEnlargement: true, 
        })
        .toFormat("jpg")
        .jpeg({ quality: 95 })
        .toFile(
            path.resolve(req.file.destination,newFilename)
            )
        fs.unlinkSync(req.file.path);

            var table_name = 'countries'.charAt(0).toUpperCase() + 'countries'.slice(1);
            DB.query('SELECT code,name FROM '+table_name+' WHERE id ="' + req.body.country_id +'"', function (err, country) {

                if (err) throw err;
                if (country[0]) {
                  var code = country[0].code;
                  var country = country[0].code;

                  if (code == 'ita') {
                    var table_name = 'VendorIta';
                }else{
                    var codee = code.charAt(0).toUpperCase() + code.slice(1);
                    var table_name = 'Vendor' + codee + 's';
                }

                DB.query('SELECT * FROM '+table_name+' WHERE user_id ="' + req.body.user_id+'"', function (err, vendor_pro) {
                    if (err) throw err;
                    if (vendor_pro[0]) {

                        var categ = vendor_pro[0].categories; 
                        var address = vendor_pro[0].address;
                        var latitude = vendor_pro[0].latitude;
                        var longitude = vendor_pro[0].longitude;                  
                        AdSpace.create({image:newFilename,categories: categ ,address: address ,latitude: latitude ,longitude: longitude , add_membership_id:req.body.add_membership_id,link:req.body.link,country_code: code, user_id:req.body.user_id});
                        res.status(200).send({
                            msg: 'Ad Space added.'
                        })
                    }else{
                      res.status(200).send({
                        'message': 'User updated2'
                    });
                  }
              })

            }else{
              res.status(400).send(err);
          }
      });
            
        }
});

router.get('/', passport.authenticate('vendor', {
    session: false
}), function (req, res) {
    AdSpace
    .findAll({where:{user_id:req.user.id}})
    .then((jobs) => res.status(200).send(jobs))
    .catch((error) => {
        res.status(400).send(error);
    });
});

router.get('/list/:id', (req, res) => {
    AdSpace
    .findAll({where:{user_id:req.params.id}})
    .then((adspace) => res.status(200).send(adspace))
    .catch((error) => {
        res.status(400).send(error);
    });
});

// Delete a AdSpace
router.delete('/:id', (req, res) => {
    if (!req.params.id) {
        res.status(400).send({
            msg: 'Please pass AdSpace ID.'
        })
    } else {
        AdSpace
        .findByPk(req.params.id)
        .then((adspace) => {
            if (adspace) {

                if(adspace.image){
                    var filePath = path.resolve('./')+'/uploads/adspaces/'+adspace.image; 

                    if (fs.existsSync(filePath)) {

                        fs.unlinkSync(filePath);
                    }
                }               

                AdSpace.destroy({
                    where: {
                        id: req.params.id
                    }
                }).then(_ => {
                    res.status(200).send({
                        'message': 'Ad Space deleted'
                    });
                }).catch(err => res.status(400).send(err));
            } else {
                res.status(404).send({
                    'message': 'Ad Space not found'
                });
            }
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    }
});


router.get('/list-with-frequency', (req, res) => {

    var code = req.query.country;   

    var category = req.query.category;

    if (category) {
        var conditions = {
            where:{
                country_code: { [Op.eq]: req.query.country },
                categories: {
                    [Op.like]: req.query.category ? '%'+req.query.category+'%' : ''
                }
            },
            limit: 3,

            order: Sequelize.literal('rand()')
        }
    }else{
        var conditions = {
            where:{
                country_code: { [Op.eq]: req.query.country }
            },
            limit: 3,
            
            order: Sequelize.literal('rand()')
        }
    } 

    AdSpace
    .findAll(conditions)
    .then((menuitem) => res.status(200).send(menuitem))
    .catch((error) => {
        res.status(400).send(error);
    });
});


router.get('/list', (req, res) => {

    var address = req.query.address;
    var latitude = req.query.latitude;
    var longitude = req.query.longitude;

    const haversine = `(
        6371 * acos(
            cos(radians(${latitude}))
            * cos(radians(latitude))
            * cos(radians(longitude) - radians(${longitude}))
            + sin(radians(${latitude})) * sin(radians(latitude))
        )
    )`;


    var code = req.query.country;   

    var category = req.query.category;

    if (category && !address) {
        var conditions = {
            where:{
                country_code: { [Op.eq]: req.query.country },
                categories: {
                    [Op.like]: req.query.category ? '%'+req.query.category+'%' : ''
                }
            },
            limit: 3,
            order: Sequelize.literal('rand()')
        }
    }else if (address) {
        var conditions = {

            attributes: [
            'id','image','user_id',
            [Sequelize.literal(haversine), 'distance'],
            ],

            where:{
                country_code: { [Op.eq]: req.query.country },
                categories: {
                    [Op.like]: req.query.category ? '%'+req.query.category+'%' : ''
                }
            },
            limit: 3,
            order: Sequelize.literal('rand()'),
            having: Sequelize.literal(`distance <= 50`),
        }
    }else {
        var conditions = {
            where:{
                country_code: { [Op.eq]: req.query.country }
            },
            limit: 3,
            order: Sequelize.literal('rand()')
        }
    } 

    AdSpace
    .findAll(conditions)
    .then((menuitem) => res.status(200).send(menuitem))
    .catch((error) => {
        res.status(400).send(error);
    });
});

module.exports = router;
