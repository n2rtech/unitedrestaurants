const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const RolePermission = require('../models').RolePermission;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();
const Sequelize = require('sequelize');
const Op = require('sequelize').Op

// Create a new Role
router.post('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Roles & Permission').then((rolePerm) => {
        if (!req.body.role_name || !req.body.role_description) {
            res.status(400).send({
                msg: 'Please pass Role name or description.'
            })
        } else {
            Role
                .create({
                    role_name: req.body.role_name,
                    role_description: req.body.role_description
                })
                .then((role) => res.status(201).send(role))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
        }
    }).catch((error) => {
        res.status(403).send(error);
    });
});

// Get List of Roles
router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
        Role
            .findAll({
                 where:{
                    role_name: {
                        [Op.ne]: 'vendor'}
                    },
                include: [
                    {
                        model: Permission,
                        as: 'permissions',
                    }
                    /*,
                    {
                        model: User,
                        as: 'users',
                    }*/
                ]
            })
            .then((roles) => res.status(200).send(roles))
            .catch((error) => {
                res.status(400).send(error);
            });
});


router.get('/all', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
        Role
            .findAll({
                where:{
                    role_name: {
                        [Op.ne]: 'vendor'}
                    }
            })
            .then((roles) => res.status(200).send(roles))
            .catch((error) => {
                res.status(400).send(error);
            });
});

// Get Role by ID
router.get('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    Role
        .findByPk(
            req.params.id, {
                include: {
                    model: Permission,
                    as: 'permissions',
                }
            }
        )
        .then((roles) => res.status(200).send(roles))
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a Role
router.put('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'role_update').then((rolePerm) => {
        if (!req.params.id || !req.body.role_name || !req.body.role_description) {
            res.status(400).send({
                msg: 'Please pass Role ID, name or description.'
            })
        } else {
            Role
                .findByPk(req.params.id)
                .then((role) => {
                    Role.update({
                        role_name: req.body.role_name || role.role_name,
                        role_description: req.body.role_description || role.role_description
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Role updated'
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

// Delete a Role
router.delete('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'role_delete').then((rolePerm) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass role ID.'
            })
        } else {
            Role
                .findByPk(req.params.id)
                .then((role) => {
                    if (role) {
                        Role.destroy({
                            where: {
                                id: req.params.id
                            }
                        }).then(_ => {
                            res.status(200).send({
                                'message': 'Role deleted'
                            });
                        }).catch(err => res.status(400).send(err));
                    } else {
                        res.status(404).send({
                            'message': 'Role not found'
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

// Add Permissions to Role
router.post('/permissions/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
        if (!req.body.permissions) {
            res.status(400).send({
                msg: 'Please pass permissions.'
            })
        } else {
            Role
                .findByPk(req.params.id)
                .then((role) => {
                    console.log(req.body.permissions);

                    if (req.body.permissions) {

                        RolePermission.destroy({
                            where: {
                                role_id: req.params.id
                            }
                        }).then(_ => {
                            req.body.permissions.forEach(function (item, index) {
                        Permission
                            .findByPk(item)
                            .then(async (perm) => {
                                await role.addPermissions(perm, {
                                    through: {
                                        selfGranted: false
                                    }
                                });
                            }).then(_ => {
                                res.status(200).send({
                                    'message': 'Permissions added'
                                });
                            })
                            .catch((error) => {
                                res.status(400).send(error);
                            });
                    });
                        }).catch(err => res.status(400).send(err));
                    }
                })
                .catch((error) => {
                    console.log(error);
                    res.status(400).send('error');
                });
        }
});

module.exports = router;
