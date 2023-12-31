const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Profile = require('../models').Profile;
const ProfileCategory = require('../models').ProfileCategory;
const Category = require('../models').Category;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();
const path = require('path');
var multer  = require('multer');
var fs = require('fs');

const imageStorage = multer.diskStorage({
    destination: 'uploads/banner', 
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '_' + Date.now() 
       + path.extname(file.originalname))
  }
});

const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1000000 
},
fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) { 
     return cb(new Error('Please upload a Image'))
 }
 cb(undefined, true)
}
}) 


// Create a new Profile
router.post('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Business Profile').then((rolePerm) => {
        if (!req.body.business_name || !req.body.business_name) {
            res.status(400).send({
                msg: 'Please pass Business Name or Email.'
            })
        } else {
            Profile
            .create({
                    user_id: req.body.user_id,
                    business_name: req.body.business_name,
                    business_email: req.body.business_email,
                    manager_name: req.body.manager_name,
                    manager_email: req.body.manager_email,
                    phone_number: req.body.phone_number,
                    fax: req.body.fax,
                    address: req.body.address,
                    categories: req.body.categories,
                    website_link: req.body.website_link,
                    media_links: req.body.media_links,
                    facebook: req.body.facebook,
                    instagram: req.body.instagram,
                    youtube: req.body.youtube
                })
                .then((profile) => res.status(201).send(profile))
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
    }).catch((error) => {
        res.status(403).send(error);
    });
});


// Get Profile by ID
router.get('/:id', passport.authenticate('vendor', {
    session: false
}), function (req, res) {
    Profile
    .findOne({ where:{
        user_id: req.params.id|req.user.id
    }
})
    .then((profile2) => {
        if (profile2) {

            Profile
            .findByPk(profile2.id,
            {
                include: [{
                    model: Category,
                    as: 'category',
                }]
            }
            )
            .then((profile1) => res.status(200).send(profile1))
            .catch((error) => {
                res.status(400).send(error);
            });

        }else{

            Profile
            .create({
                    user_id: req.user.id,
                    business_name: req.user.name,
                    business_email: req.user.email,
                    manager_name: req.user.name,
                    manager_email: req.user.email,
                    phone_number: req.user.mobile
                })
                .then((profile) => res.status(201).send(profile))
        }            
    })
    .catch((error) => {
        res.status(400).send(error);
    });
});




// Get Profile by ID
router.get('/get/:id', (req, res) => {
    Profile
    .findOne({ where:{
        user_id: req.params.id
    }
})
    .then((profile2) => {
        if (profile2) {

            Profile
            .findByPk(profile2.id,
            {
                include: [{
                    model: Category,
                    as: 'category',
                }]
            }
            )
            .then((profile1) => res.status(200).send(profile1))
            .catch((error) => {
                res.status(400).send(error);
            });

        }else{
            res.status(200).send({'message' : 'profile not found'});
        }            
    })
    .catch((error) => {
        res.status(400).send(error);
    });
});


// Update a Profile
router.put('/:id', imageUpload.single('banner'), (req, res) => {

        if (!req.params.id || !req.body.business_name || !req.body.business_email) {
            res.status(400).send({
                msg: 'Please pass Profile ID, name or email.'
            })
        } else {
            // Note for krishna
            Profile  // Need to set dynamic table please look here now we updated profile data in vendor_countrycode name table not profiles table
                .findByPk(req.params.id)
                .then((profile) => {

                    if (req.file) {
                        var filePath = path.resolve('./')+'/uploads/banner/'+profile.banner; 
                        fs.unlinkSync(filePath);
                        var image = req.file.filename;
                    }else{
                        var image = profile.banner;
                    }

                    Profile.update({
                        business_name: req.body.business_name || profile.business_name,
                        business_email: req.body.business_email || profile.business_email,
                        manager_name: req.body.manager_name || profile.manager_name,
                        manager_email: req.body.manager_email || profile.manager_email,
                        phone_number: req.body.phone_number || profile.phone_number,
                        fax: req.body.fax || profile.fax,
                        banner: image,
                        address: req.body.address || profile.address,
                        website_link: req.body.website_link || profile.website_link,
                        media_links: req.body.media_links || profile.media_links,
                        facebook: req.body.facebook || profile.facebook,
                        instagram: req.body.instagram || profile.instagram,
                        youtube: req.body.youtube || profile.youtube
                    }, {
                        where: {
                            id: profile.id
                        }
                    }).then((dddd) => {

                        ProfileCategory.destroy({ where: { profile_id: profile.id }});
                        var arr = req.body.categories.split(',');
                        arr.forEach(function (item, index) {
                            console.log(item);
                        Category
                        .findByPk(item)
                        .then(async (category) => {
                            await profile.addCategory(category, {
                                through: {
                                    selfGranted: false
                                }
                            });
                        })
                        .catch((error) => {
                            res.status(400).send(error);
                        });
                    });
                      res.status(200).send({
                        'message': 'Profile added'
                    });

                        res.status(200).send({
                            'message': 'Profile updated'
                        });
                    }).catch(err => res.status(400).send('err'));
                })
                .catch((err) => {
                    res.status(400).send('err');
                });
        }
});

// Delete a Profile
router.delete('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'role_delete').then((rolePerm) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass role ID.'
            })
        } else {
            Profile
                .findByPk(req.params.id)
                .then((role) => {
                    if (role) {
                        Profile.destroy({
                            where: {
                                id: req.params.id
                            }
                        }).then(_ => {
                            res.status(200).send({
                                'message': 'Profile deleted'
                            });
                        }).catch(err => res.status(400).send(err));
                    } else {
                        res.status(404).send({
                            'message': 'Profile not found'
                        });
                    }
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
    }).catch((error) => {
        res.status(403).send(error);
    });
});


module.exports = router;
