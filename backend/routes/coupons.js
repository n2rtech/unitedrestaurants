const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Coupon = require('../models').Coupon;
const Category = require('../models').Category;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();
const Op = require('sequelize').Op
// Create a new Coupon
router.post('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'role_add').then((rolePerm) => {
        if (!req.body.name || !req.body.discount) {
            res.status(400).send({
                msg: 'Please pass Coupon name or discount.'
            })
        } else {
            Coupon
                .create({
                    name: req.body.name,
                    code: req.body.code,
                    discount: req.body.discount,
                    total: req.body.total,
                    type: req.body.type,
                    date_start: req.body.date_start,
                    date_end: req.body.date_end,
                    status: req.body.status,
                    uses_total: req.body.uses_total
                })
                .then((coupon) => res.status(201).send(coupon))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
        }
    }).catch((error) => {
        res.status(403).send(error);
    });
});


// Get List of deleted Coupons
router.get('/deleted', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    Coupon
    .findAll({
        where:{deletedAt: {
            [Op.ne]: null
        }}})
    .then((roles) => res.status(200).send(roles))
    .catch((error) => {
        res.status(400).send(error);
    });
});


// Get List of Coupons
router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
        Coupon
            .findAll({
                where:{status:1},
                include: [{
                    model: User,
                    as: 'user',
                },
                {
                    model: Category,
                    as: 'category',
                }]
            })
            .then((roles) => res.status(200).send(roles))
            .catch((error) => {
                res.status(400).send(error);
            });
});

// Get Coupon by ID
router.get('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'role_add').then((rolePerm) => {

    }).catch((error) => {
        res.status(403).send(error);
    });
    Coupon
        .findByPk(
            req.params.id, {
                include: [{
                    model: User,
                    as: 'user',
                },
                {
                    model: Category,
                    as: 'category',
                }]
            }
        )
        .then((roles) => res.status(200).send(roles))
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a Coupon
router.put('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'role_update').then((rolePerm) => {
        if (!req.params.id || !req.body.role_name || !req.body.role_description) {
            res.status(400).send({
                msg: 'Please pass Coupon ID, name or description.'
            })
        } else {
            Coupon
                .findByPk(req.params.id)
                .then((coupon) => {
                    Coupon.update({
                        role_name: req.body.role_name || role.role_name,
                        role_description: req.body.role_description || role.role_description
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Coupon updated'
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

// Delete a Coupon
router.delete('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass role ID.'
            })
        } else {
            Coupon
                .findByPk(req.params.id)
                .then((coupon) => {
                    if (coupon) {
                        Coupon.update({deletedAt:new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')},{
                            where: {
                                id: req.params.id
                            }
                        }).then(_ => {
                            res.status(200).send({
                                'message': 'Coupon deleted'
                            });
                        }).catch(err => res.status(400).send(err));
                    } else {
                        res.status(404).send({
                            'message': 'Coupon not found'
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                    res.status(400).send('error');
                });
        }
});


// Apply a Coupon
router.post('/apply', function (req, res) {
    if (!req.body.coupon_code) {
        res.status(201).send({
            msg: 'Please enter coupon code.'
        })
    } else {
        Coupon
            .findAll({
                where:{code : req.body.coupon_code}
            })
            .then((roles) => {
                res.status(200).send(roles);
            })
            .catch((error) => {
                res.status(400).send({error: 'Coupon not found / exists'});
            });
        }
});


// Restore a Coupon
router.post('/restore', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    Coupon.update( { deletedAt: null }, { where: {deletedAt: {[Op.ne]: null} }})
    .then(_ => {
        res.status(200).send({
            'message': 'Coupon restored'
        });
    }).catch(err => res.status(400).send(err));
});


// Add Permissions to Coupon
router.post('/permissions/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'role_add').then((rolePerm) => {
        if (!req.body.permissions) {
            res.status(400).send({
                msg: 'Please pass permissions.'
            })
        } else {
            Coupon
                .findByPk(req.params.id)
                .then((coupon) => {
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

router.post('/add', function (req, res) {
        if (!req.body.name || !req.body.coupon_code) {
            res.status(400).send({
                msg: 'Please pass Coupon name or discount.'
            })
        } else {
            Coupon
                .create({
                    name: req.body.name,
                    code: req.body.coupon_code,
                    status: req.body.status,
                })
                .then((coupon) => res.status(201).send(coupon))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
        }
    
});

module.exports = router;
