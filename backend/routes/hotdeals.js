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
const { Sequelize } = require('sequelize');
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

    const startDate = new Date().toJSON().slice(0, 10);
    const endDate   = new Date().toJSON().slice(0, 10);

    var category = req.query.category;

    var filter = req.query.filter;

    if (category && filter && !address) {

        var conditions =  {
            where: {
                [Op.and]:
                [
                {
                    country: { 
                        [Op.eq]: req.query.country 
                    }
                },
                {
                    categories: { 
                        [Op.like]: '%' + req.query.category + '%' 
                    }
                },
                {
                    business_name: { 
                        [Op.like]: '%' + req.query.filter + '%' 
                    }
                }
                ],            
                [Op.or]: 
                [
                {
                    start_date: {
                        [Op.gte]: [startDate],
                        [Op.lte]: [startDate]
                    }
                }, {
                    end_date: {
                        [Op.gte]: [endDate]
                    }
                }
                ]
            }
        };

    }else if (category && !address) {
        var conditions =  {
            where: {
                [Op.and]:
                [
                {
                    country: { 
                        [Op.eq]: req.query.country 
                    }
                },
                {
                    categories: { 
                        [Op.like]: '%' + req.query.category + '%' 
                    }
                }
                ],            
                [Op.or]: 
                [
                {
                    start_date: {
                        [Op.gte]: [startDate],
                        [Op.lte]: [startDate]
                    }
                }, {
                    end_date: {
                        [Op.gte]: [endDate]
                    }
                }
                ]
            }
        };

    }else if (address) {
        var conditions =  {

            attributes: [
            'id', 'business_name', 'about_business', 'user_id', 'discount', 'start_date', 'end_date',
            [Sequelize.literal(haversine), 'distance'],
            ],

            where: {
                [Op.and]:
                [
                {
                    country: { 
                        [Op.eq]: req.query.country 
                    }
                },
                {
                    categories: { 
                        [Op.like]: '%' + req.query.category + '%' 
                    }
                }
                ],            
                [Op.or]: 
                [
                {
                    start_date: {
                        [Op.gte]: [startDate],
                        [Op.lte]: [startDate]
                    }
                }, {
                    end_date: {
                        [Op.gte]: [endDate]
                    }
                }
                ]
            },

            order: [ [ 'createdAt', 'DESC' ]],
            having: Sequelize.literal(`distance <= 50`),

        };

    }else {
        var conditions = {
            where: {
                [Op.and]:
                [
                {
                    country: { [Op.eq]: req.query.country 
                    }
                },
                ],            
                [Op.or]: 
                [
                {
                    start_date: {
                        [Op.gte]: [startDate],
                        [Op.lte]: [startDate]
                    }
                }, {
                    end_date: {
                        [Op.gte]: [endDate]
                    }
                }
                ]
            },
            order: [ [ 'createdAt', 'DESC' ]],
        };
    }

    HotDeal
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


router.get('/deals/all', (req, res) => {

        code = req.query.country||'usa';
        const { page, size } = req.query;
        const { limit, offset } = getPagination(page, size);
        
        condition = {
            attributes: ['id','about_business', 'banner', 'business_name','user_id'],
            where: {country : code, about_business : {[Op.not]: null}},
            offset,
            limit,
            order: [ [ 'createdAt', 'DESC' ]]
        }       
        HotDeal
        .findAndCountAll(condition)
        .then(vendors => {
            const response = getPagingData(vendors, page, limit);
            res.status(200).send(response)
        })
        .catch((error) => {
            console.log(error);
            res.status(400).send('error2');
        });
    });


    const getPagination = (page=1, size) => {
      const limit = size ? +size : 3;
      const offset =  (page-1) * limit;

      return { limit, offset };
  };

  const getPagingData = (data, page, limit) => {
      const { count: totalItems, rows: vendors } = data;
      const currentPage = page ? +page : 0;
      const totalPages = Math.ceil(totalItems / limit);

      return { totalItems, vendors, totalPages, currentPage };
  };

module.exports = router;
