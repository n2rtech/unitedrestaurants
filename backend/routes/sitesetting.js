const express = require('express');
const router = express.Router();
const User = require('../models').User;
const SiteSetting = require('../models').SiteSetting;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const passport = require('passport');
require('../config/passport')(passport);
const path = require('path');
var multer  = require('multer');
var fs = require('fs');

const imageStorage = multer.diskStorage({
    destination: 'uploads/site', 
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '_' + Date.now() 
       + path.extname(file.originalname))
  }
});

const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1000000000000
},
fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|JPG)$/)) { 
     return cb(new Error('Please upload a Image'))
 }
 cb(undefined, true)
}
}) 



// Get SiteSetting by ID
router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    SiteSetting
    .findByPk(1)
    .then((sitesetting2) => {
        if (sitesetting2) {
            SiteSetting
            .findByPk(sitesetting2.id)
            .then((sitesetting1) => res.status(200).send(sitesetting1))
            .catch((error) => {
                res.status(400).send(error);
            });

        }else{
            SiteSetting
            .create({
                    maintenance_mode: "no",
                    site_name: "United Restaurants",
                    phone_number: '',
                    address: '',
                    facebook_links: '',
                    twitter_links: '',
                    google_plus_links: '',
                    linkedin_links: '',
                    instagram_links: '',
                    logo: '',
                })
                .then((sitesetting) => res.status(201).send(sitesetting))
        }            
    })
    .catch((error) => {
        res.status(400).send(error);
    });
});

// Update a SiteSetting
router.put('/', imageUpload.single('logo'), (req, res) => {

    if (!req.body.site_name || !req.body.phone_number) {
        res.status(400).send({
            msg: 'Please pass Site Setting Name or Phone Number.'
        })
    } else {
        SiteSetting
        .findByPk(1)
        .then((sitesetting) => {

            if (req.file) {
                if (sitesetting.logo && sitesetting.logo != null || sitesetting.logo =="") {
                    var filePath = path.resolve('./')+'/uploads/site/'+sitesetting.logo; 
                    fs.unlinkSync(filePath);
                }
                var image = req.file.filename;
            }else{
                var image = sitesetting.logo;
            }

            SiteSetting.update({
                maintenance_mode: req.body.maintenance_mode || sitesetting.maintenance_mode,
                site_name: req.body.site_name || sitesetting.site_name,
                phone_number: req.body.phone_number || sitesetting.phone_number,
                address: req.body.address || sitesetting.address,
                facebook_links: req.body.facebook_links || sitesetting.facebook_links,
                twitter_links: req.body.twitter_links || sitesetting.twitter_links,
                google_plus_links: req.body.google_plus_links || sitesetting.google_plus_links,
                linkedin_links: req.body.linkedin_links || sitesetting.linkedin_links,
                instagram_links: req.body.instagram_links || sitesetting.instagram_links,
                logo: image
            }, {
                where: {
                    id: 1
                }
            }).then((dddd) => {

                res.status(200).send({
                    'message': 'Site Setting updated'
                });
            }).catch(err => res.status(400).send('err'));
        })
        .catch((error) => {
            res.status(400).send('error');
        });
    }
});


// Get SiteSetting by ID
router.get('/get', (req, res) => {
    SiteSetting
    .findByPk(1)
    .then((sitesetting2) => {
        if (sitesetting2) {
            SiteSetting
            .findByPk(sitesetting2.id)
            .then((sitesetting1) => res.status(200).send(sitesetting1))
            .catch((error) => {
                res.status(400).send(error);
            });

        }else{
            SiteSetting
            .create({
                    maintenance_mode: "no",
                    site_name: "United Restaurants",
                    phone_number: '',
                    address: '',
                    facebook_links: '',
                    twitter_links: '',
                    google_plus_links: '',
                    linkedin_links: '',
                    instagram_links: '',
                    logo: '',
                })
                .then((sitesetting) => res.status(201).send(sitesetting))
        }            
    })
    .catch((error) => {
        res.status(400).send(error);
    });
});


module.exports = router;
