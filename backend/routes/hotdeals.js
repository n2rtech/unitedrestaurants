const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const HotDeal = require('../models').HotDeal;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();
const Op = require('sequelize').Op

// Create a new HotDeal
router.post('/', (req, res) => {
        if (!req.body.deal_name || !req.body.deal_description) {
            res.status(400).send({
                msg: 'Please pass menuitem name or description.'
            })
        } else {
            HotDeal
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

// Get List of HotDeals


router.get('/list', (req, res) => {
        HotDeal
            .findAll()
            .then((menuitem) => res.status(200).send(menuitem))
            .catch((error) => {
                res.status(400).send(error);
            });
});

/*{where:{country:req.query.country}}*/
router.get('/', (req, res) => { 
    const startDate = new Date().toJSON().slice(0, 10);
    const endDate   = new Date().toJSON().slice(0, 10);
    HotDeal
    .findAll(
    {
        where: {
            [Op.and]:[
                {country: { [Op.eq]: req.query.country }},
                // {business_name: { [Op.like]: req.query.business_name }},
                // {categories: { [Op.like]: '%"' + req.query.category + '"%' }},
                
            ],
            [Op.or]: [{
                start_date: {
                    [Op.gte]: [startDate],
                    [Op.lte]: [startDate]
                }
            }, {
                end_date: {
                    [Op.gte]: [endDate]
                }
            }]
        }
    })
    .then((menuitem) => res.status(200).send(menuitem))
    .catch((error) => {
        res.status(400).send(error);
    });
});



router.get('/list/:id', (req, res) => {   
    HotDeal
    .findAll({where:{user_id:req.params.id}})
    .then((menuitem) => res.status(200).send(menuitem))
    .catch((error) => {
        res.status(400).send(error);
    });
});




// Get HotDeal by ID
router.get('/:id', (req, res) => {
    HotDeal
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
            HotDeal
                .findByPk(req.params.id)
                .then((menuitem) => {
                    HotDeal.update({
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

// Delete a HotDeal
router.delete('/:id', (req, res) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass menuitem ID.'
            })
        } else {
            HotDeal
                .findByPk(req.params.id)
                .then((menuitem) => {
                    if (menuitem) {
                        HotDeal.destroy({
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
