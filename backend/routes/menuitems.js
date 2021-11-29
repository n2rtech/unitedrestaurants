const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const MenuItem = require('../models').MenuItem;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

// Create a new MenuItem
router.post('/', (req, res) => {
        if (!req.body.deal_name || !req.body.deal_description) {
            res.status(400).send({
                msg: 'Please pass Job name or description.'
            })
        } else {
            MenuItem
                .create({
                    deal_name: req.body.deal_name,
                    user_id: req.body.user_id,
                    deal_description: req.body.deal_description
                })
                .then((vendorcoupon) => res.status(201).send(vendorcoupon))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
        }
});

// Get List of MenuItems


router.get('/list', (req, res) => {
        MenuItem
            .findAll()
            .then((vendorcoupons) => res.status(200).send(vendorcoupons))
            .catch((error) => {
                res.status(400).send(error);
            });
});


router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {   
    MenuItem
    .findAll({where:{user_id:req.user.id}})
    .then((vendorcoupons) => res.status(200).send(vendorcoupons))
    .catch((error) => {
        res.status(400).send(error);
    });
});



// Get MenuItem by ID
router.get('/:id', (req, res) => {
    MenuItem
        .findOne({
            where:{
           user_id : req.params.id
        }})
        .then((vendorcoupons) => res.status(200).send(vendorcoupons))
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a Menu Items
router.put('/:id', function (req, res) {
        if (!req.params.id || !req.body.content) {
            res.status(400).send({
                msg: 'Please pass Job ID, description.'
            })
        } else {
            MenuItem
                .findByPk(req.params.id)
                .then((vendorcoupon) => {
                    MenuItem.update({
                        user_id: req.body.user_id || vendorcoupon.user_id,
                        content: req.body.content || vendorcoupon.content
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Menu Item updated'
                        });
                    }).catch(err => res.status(400).send(err));
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
});

// Delete a MenuItem
router.delete('/:id', (req, res) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass vendorcoupon ID.'
            })
        } else {
            MenuItem
                .findByPk(req.params.id)
                .then((vendorcoupon) => {
                    if (vendorcoupon) {
                        MenuItem.destroy({
                            where: {
                                id: req.params.id
                            }
                        }).then(_ => {
                            res.status(200).send({
                                'message': 'Job deleted'
                            });
                        }).catch(err => res.status(400).send(err));
                    } else {
                        res.status(404).send({
                            'message': 'Job not found'
                        });
                    }
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
});

module.exports = router;
