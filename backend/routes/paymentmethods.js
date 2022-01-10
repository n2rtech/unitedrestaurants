const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const PaymentMethod = require('../models').PaymentMethod;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

// Create a new PaymentMethod
router.post('/', (req, res) => {
        if (!req.body.deal_name || !req.body.deal_description) {
            res.status(400).send({
                msg: 'Please pass Job name or description.'
            })
        } else {
            PaymentMethod
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

// Get List of PaymentMethods


router.get('/list', (req, res) => {
        PaymentMethod
            .findAll()
            .then((vendorcoupons) => res.status(200).send(vendorcoupons))
            .catch((error) => {
                res.status(400).send(error);
            });
});


router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {   
    PaymentMethod
    .findAll({where:{user_id:req.user.id}})
    .then((vendorcoupons) => res.status(200).send(vendorcoupons))
    .catch((error) => {
        res.status(400).send(error);
    });
});



// Get PaymentMethod by ID
router.get('/:id', (req, res) => {
    PaymentMethod
        .findOne({
            where:{
           user_id : req.params.id
        }})
        .then((paymentmethod) => {
           
            if (paymentmethod == null) {
                PaymentMethod
                .create({
                    card_number: '',
                    name_on_card: '',
                    expiry_date: '',
                    cvv: '0',
                    user_id: req.params.id
                })
                .then((paymentmethod) => {
                    res.status(200).send({
                    'status' : true,
                    'data' : paymentmethod
                })
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
            }else{
               res.status(201).send(paymentmethod); 
            }
        })
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a Menu Items
router.put('/:id', function (req, res) {
        if (!req.params.id || !req.body.card_number) {
            res.status(400).send({
                msg: 'Please pass Job ID, description.'
            })
        } else {
            PaymentMethod
                .findByPk(req.params.id)
                .then((paymentmethod) => {
                    PaymentMethod.update({
                        user_id: req.body.user_id || paymentmethod.user_id,
                        card_number: req.body.card_number || paymentmethod.card_number,
                        name_on_card: req.body.name_on_card || paymentmethod.name_on_card,
                        expiry_date: req.body.expiry || paymentmethod.expiry_date,
                        cvv: req.body.cvv || paymentmethod.cvv
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Payment Method updated'
                        });
                    }).catch(err => res.status(400).send(err));
                })
                .catch(error => 
                    res.status(400).send(console.log(error)));
        }
});

// Delete a PaymentMethod
router.delete('/:id', (req, res) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass vendorcoupon ID.'
            })
        } else {
            PaymentMethod
                .findByPk(req.params.id)
                .then((vendorcoupon) => {
                    if (vendorcoupon) {
                        PaymentMethod.destroy({
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
