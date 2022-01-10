const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const BusinessAdvertise = require('../models').BusinessAdvertise;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();
const db = require('../models');

const app = express();
app.db = (model) => db[model];


// Create a new BusinessAdvertise
router.post('/', (req, res) => {
        if (!req.body.deal_name || !req.body.deal_description) {
            res.status(400).send({
                msg: 'Please pass menuitem name or description.'
            })
        } else {
            BusinessAdvertise
                .create({
                    deal_name: req.body.deal_name,
                    user_id: req.body.user_id,
                    deal_description: req.body.deal_description
                })
                .then((menuitem) => res.status(201).send(menuitem))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
        }
});

// Get List of BusinessAdvertises


router.get('/list', (req, res) => {
        BusinessAdvertise
            .findAll()
            .then((menuitem) => res.status(200).send(menuitem))
            .catch((error) => {
                res.status(400).send(error);
            });
});


router.get('/', (req, res) => {
    BusinessAdvertise
    .findAll({where:{country:req.query.country}})
    .then((menuitem) => res.status(200).send(menuitem))
    .catch((error) => {
        res.status(400).send(error);
    });
});



router.get('/list/:id', (req, res) => {   
    BusinessAdvertise
    .findAll({where:{user_id:req.params.id}})
    .then((menuitem) => res.status(200).send(menuitem))
    .catch((error) => {
        res.status(400).send(error);
    });
});




// Get BusinessAdvertise by ID
router.get('/:id', (req, res) => {
    BusinessAdvertise
        .findOne({
            where:{
           user_id : req.params.id
        }})
        .then((menuitem) => res.status(200).send(menuitem))
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
            BusinessAdvertise
                .findByPk(req.params.id)
                .then((menuitem) => {
                    BusinessAdvertise.update({
                        user_id: req.body.user_id || menuitem.user_id,
                        content: req.body.content || menuitem.content
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

// Delete a BusinessAdvertise
router.delete('/:id', (req, res) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass menuitem ID.'
            })
        } else {
            BusinessAdvertise
                .findByPk(req.params.id)
                .then((menuitem) => {
                    if (menuitem) {
                        BusinessAdvertise.destroy({
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
