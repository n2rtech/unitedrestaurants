const express = require('express');
const router = express.Router();
const AdSpace = require('../models').AdSpace;
const {DB} = require('../config/database');
const passport = require('passport');
require('../config/passport')(passport);
const path = require('path');
var fs = require('fs');
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
        fileSize: 100000000
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
}), imageUpload.single('image'),  function (req, res) {
        if (!req.file) {
            res.status(400).send({
                msg: 'Please pass Image.'
            })
        } else {

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
                                    AdSpace.create({image:req.file.filename,categories: categ , add_membership_id:req.body.add_membership_id,link:req.body.link,country_code: code, user_id:req.body.user_id});
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

                var filePath = path.resolve('./')+'/uploads/adspaces/'+adspace.image; 
                fs.unlinkSync(filePath);

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



router.get('/list', (req, res) => {
    var code = req.query.country;    
    AdSpace
    .findAll(
    {
        where: {
            [Op.and]:[
                {country_code: { [Op.eq]: req.query.country }},
            ]
        },
        limit: 10,
        order: Sequelize.literal('rand()'), limit: 25
    })
    .then((menuitem) => res.status(200).send(menuitem))
    .catch((error) => {
        res.status(400).send(error);
    });
});



module.exports = router;
