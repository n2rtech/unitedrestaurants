const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Profile = require('../models').Profile;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

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
router.get('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Business Profile').then((rolePerm) => {

    }).catch((error) => {
        res.status(403).send(error);
    });
    Profile
        .findOne({
            user_id: req.params.id
        })
        .then((profile) => res.status(200).send(profile))
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a Profile
router.put('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {

    helper.checkPermission(req.user.role_id, 'Business Profile').then((rolePerm) => {
        if (!req.params.id || !req.body.business_name || !req.body.business_email) {
            res.status(400).send({
                msg: 'Please pass Profile ID, name or email.'
            })
        } else {
            Profile
                .findOne({
                            user_id: req.params.id
                        })
                .then((profile) => {
                    Profile.update({
                        business_name: req.body.business_name || profile.business_name,
                        business_email: req.body.business_email || profile.business_email,
                        manager_name: req.body.manager_name || profile.manager_name,
                        manager_email: req.body.manager_email || profile.manager_email,
                        phone_number: req.body.phone_number || profile.phone_number,
                        fax: req.body.fax || profile.fax,
                        address: req.body.address || profile.address,
                        categories: req.body.categories || profile.categories,
                        website_link: req.body.website_link || profile.website_link,
                        media_links: req.body.media_links || profile.media_links,
                        facebook: req.body.facebook || profile.facebook,
                        instagram: req.body.instagram || profile.instagram,
                        youtube: req.body.youtube || profile.youtube
                    }, {
                        where: {
                            user_id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Profile updated'
                        });
                    }).catch(err => res.status(400).send(err));
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
    }).catch((error) => {
        res.status(403).send(error);
    });
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

// Add Permissions to Profile
router.post('/permissions/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Business Profile').then((rolePerm) => {
        if (!req.body.permissions) {
            res.status(400).send({
                msg: 'Please pass permissions.'
            })
        } else {
            Profile
                .findByPk(req.params.id)
                .then((role) => {
                    req.body.permissions.forEach(function (item, index) {
                        Permission
                            .findByPk(item)
                            .then(async (perm) => {
                                await role.addPermissions(perm, {
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
                        'message': 'Permissions added'
                    });
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
