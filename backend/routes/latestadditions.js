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
const db = require('../models');
const { Sequelize } = require('sequelize');
const Op = require('sequelize').Op
const app = express();
app.db = (model) => db[model];


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


router.get('/', (req, res) => {

    var address = req.query.address;
    var latitude = req.query.latitude;
    var longitude = req.query.longitude;

    const haversine = `(
        6371 * acos(
            cos(radians(${latitude}))
            * cos(radians(latitude))
            * cos(radians(longitude) - radians(${longitude}))
            + sin(radians(${latitude})) * sin(radians(latitude))
        )
    )`;

    var code = req.query.country;
    
    if (code == 'ita') {
        var table_name = 'VendorIta';
    }else{
        if(Array.isArray(code)) {
            var codee = code[0].charAt(0).toUpperCase() + code[0].slice(1);
        } else {
            var codee = code.charAt(0).toUpperCase() + code.slice(1);
        }
        
        var table_name = 'Vendor' + codee;
    }

    if (table_name == 'VendorNull') {
        var table_name = 'VendorIta';
    }


    var category = req.query.category;
    var filter = req.query.filter;

    if (category && filter && !address) {
        var conditions = {

            attributes: [
            'id','business_name','about_business','banner','createdAt','user_id'
            ],
            where:{
                business_name: {
                    [Op.like]: req.query.filter ? '%'+req.query.filter+'%' : ''
                },
                categories: {
                    [Op.like]: req.query.category ? '%'+req.query.category+'%' : ''
                }
            },
            limit: 10,
            order: [ ['createdAt', 'DESC' ]]
        }
    }else if (category && !address) {
        var conditions = {

            attributes: [
            'id','business_name','about_business','banner','createdAt','user_id'
            ],
            where:{
                categories: {
                    [Op.like]: req.query.category ? '%'+req.query.category+'%' : ''
                }
            },
            limit: 10,
            order: [ ['createdAt', 'DESC' ]]
        }
    }else if (address) {
        var conditions = {

            attributes: [
            'id','business_name','about_business','banner','createdAt','user_id',
            [Sequelize.literal(haversine), 'distance'],
            ],

            where:{
                categories: {
                    [Op.like]: req.query.category ? '%'+req.query.category+'%' : ''
                }
            },
            limit: 10,
            order: [ ['createdAt', 'DESC'] ],
            having: Sequelize.literal(`distance <= 50`),
        }
    }else{
        var conditions = {

            attributes: [
            'id','business_name','about_business','banner','createdAt','user_id'
            ],
            limit: 10,
            order: [ ['createdAt', 'DESC' ]]
        }
    }

    app.db(table_name)
    .findAll(conditions)
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
