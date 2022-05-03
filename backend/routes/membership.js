const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Membership = require('../models').Membership;
const Permission = require('../models').Permission;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

// Create a new Membership
router.post('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Membership packages').then((rolePerm) => {
        if (!req.body.name || !req.body.description) {
            res.status(400).send({
                msg: 'Please pass Membership name or description.'
            })
        } else {

            Membership.count({ where: { name: req.body.name } })
            .then(count => {
                if (count != 0) {
                    res.status(400).send({
                        msg: 'Membership already exists.'
                    })
                }              
            });

            var slug = req.body.name
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');

            Membership
            .create({
                status: req.body.status,
                name: req.body.name,
                description: req.body.description,
                slug: slug,
                interval: req.body.interval,
                price: req.body.price,
                expired_on: req.body.expired_on
            })
            .then((membership) => res.status(201).send(membership))
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
        }
    }).catch((error) => {
        res.status(403).send(error);
    });
});

// Get List of Memberships
router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Membership packages').then((rolePerm) => {
        Membership
            .findAll({})
            .then((memberships) => res.status(200).send(memberships))
            .catch((error) => {
                res.status(400).send(error);
            });
    }).catch((error) => {
        res.status(403).send(error);
    });
});

// Get Membership by ID
router.get('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Membership packages').then((rolePerm) => {

    }).catch((error) => {
        res.status(403).send(error);
    });
    Membership
        .findByPk(req.params.id)
        .then((memberships) => res.status(200).send(memberships))
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Save Package


// Update Membership by ID
router.put('/savepackage/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Membership packages').then((rolePerm) => {
        if (!req.params.id || !req.body.name || !req.body.description) {
            res.status(400).send({
                msg: 'Please pass name or description.'
            }) 
        } else  {
            Membership
            .findByPk(req.params.id)
            .then((membership) => {

                if (req.body.name) {
                    var slug = req.body.name
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '');
                }else{
                    var slug = membership.slug;
                }

                Membership.update({
                    name: req.body.name || membership.name,
                    description: req.body.description || membership.description,
                    price: req.body.price || membership.price,
                }, {
                    where: {
                        id: req.params.id
                    }
                }).then(_ => {
                    res.status(200).send({
                        'message': 'Membership updated'
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

// Update a Membership
router.put('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Membership packages').then((rolePerm) => {
        if (!req.params.id || !req.body.name || !req.body.description) {
            res.status(400).send({
                msg: 'Please pass Membership ID, name or description.'
            })
        } else {
            Membership
                .findByPk(req.params.id)
                .then((membership) => {

                    if (req.body.name) {
                        var slug = req.body.name
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '');
                    }else{
                        var slug = membership.slug;
                    }

                    Membership.update({
                        name: req.body.name || membership.name,
                        slug: slug,
                        description: req.body.description || membership.description,
                        interval: req.body.interval || membership.interval,
                        status: req.body.status || membership.status,
                        price: req.body.price || membership.price,
                        expired_on: req.body.expired_on || membership.expired_on,
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Membership updated'
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

// Delete a Membership
router.delete('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Membership packages').then((rolePerm) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass role ID.'
            })
        } else {
            Membership
                .findByPk(req.params.id)
                .then((role) => {
                    if (role) {
                        Membership.destroy({
                            where: {
                                id: req.params.id
                            }
                        }).then(_ => {
                            res.status(200).send({
                                'message': 'Membership deleted'
                            });
                        }).catch(err => res.status(400).send(err));
                    } else {
                        res.status(404).send({
                            'message': 'Membership not found'
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
