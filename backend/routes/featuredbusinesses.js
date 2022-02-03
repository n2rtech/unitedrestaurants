const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const FeaturedBusiness = require('../models').FeaturedBusiness;
const {DB} = require('../config/database');
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();
const Sequelize = require('sequelize');
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


router.get('/get-home-fb', (req, res) => {

    FeaturedBusiness
    .findAll({
        where: {
            is_seen: 0,
            country: req.query.country||'usa',
            membership_id: {
              [Sequelize.Op.in]: [3]
          },
      },
      limit: 5,
      order: [['id', 'DESC']]
  })
    .then((menuitem) => {
        if (menuitem.length <= 0) {
            FeaturedBusiness.update({is_seen : 0},{where:{is_seen : 1}})
            .then((menuitem) => {
                FeaturedBusiness
                .findAll({
                    where: {
                        is_seen: 0,
                        country: req.query.country||'usa',
                        membership_id: {
                          [Sequelize.Op.in]: [3]
                      },
                  },
                  limit: 5,
                  order: [['id', 'DESC']]
              })
                .then((menuitem) => {

                    Object.entries(menuitem).forEach(([key, value]) => {
                        menuitem[key].set({is_seen: 1});
                        menuitem[key].save();
                    })

                    res.status(200).send(menuitem)
                })
            }).catch((error) => {
                res.status(400).send('error1');
            });
        }else{
            Object.entries(menuitem).forEach(([key, value]) => {
                menuitem[key].set({is_seen: 1});
                menuitem[key].save();
            })
            res.status(200).send(menuitem)
        }

    }).catch((error) => {
        console.log(error);
        res.status(400).send('error2');
    });

});



router.get('/get-dep-home-fb', (req, res) => {
    FeaturedBusiness
    .findAll({
        where: {
            is_seen: 0,
            country: req.query.country||'usa',
            membership_id: {
              [Sequelize.Op.in]: [3]
          },
          categories: {
              [Sequelize.Op.like]: '%' + req.query.category + '%'
          },
      },
      limit: 5,
      order: [['id', 'DESC']]
  })
    .then((menuitem) => {
        if (menuitem.length <= 0) {
            FeaturedBusiness.update({is_seen : 0},{where:{is_seen : 1}})
            .then((menuitem) => {
                FeaturedBusiness
                .findAll({
                    where: {
                        is_seen: 0,
                        country: req.query.country||'usa',
                        membership_id: {
                          [Sequelize.Op.in]: [3]
                      },
                      categories: {
                          [Sequelize.Op.like]: '%' + req.query.category + '%'
                      },
                  },
                  limit: 5,
                  order: [['id', 'DESC']]
              })
                .then((menuitem) => {

                    Object.entries(menuitem).forEach(([key, value]) => {
                        menuitem[key].set({is_seen: 1});
                        menuitem[key].save();
                    })

                    res.status(200).send(menuitem)
                })
            }).catch((error) => {
                res.status(400).send('error');
            });
        }else{
            Object.entries(menuitem).forEach(([key, value]) => {
                menuitem[key].set({is_seen: 1});
                menuitem[key].save();
            })
            res.status(200).send(menuitem)
        }

    }).catch((error) => {
        res.status(400).send('error');
    });
})



router.get('/get-dep-fb', (req, res) => {
    FeaturedBusiness
    .findAll({
        where: {
            is_seen: 0,
            country: req.query.country||'usa',
            membership_id: {
              [Sequelize.Op.in]: [2,3]
          },
          categories: {
              [Sequelize.Op.like]: '%' + req.query.category + '%'
          },
      },
      limit: 5,
      order: [['id', 'DESC']]
  })
    .then((menuitem) => {
        if (menuitem.length <= 0) {
            FeaturedBusiness.update({is_seen : 0},{where:{is_seen : 1}})
            .then((menuitem) => {
                FeaturedBusiness
                .findAll({
                    where: {
                        is_seen: 0,
                        country: req.query.country||'usa',
                        membership_id: {
                          [Sequelize.Op.in]: [2,3]
                      },
                      categories: {
                          [Sequelize.Op.like]: '%' + req.query.category + '%'
                      },
                  },
                  limit: 5,
                  order: [['id', 'DESC']]
              })
                .then((menuitem) => {

                    Object.entries(menuitem).forEach(([key, value]) => {
                        menuitem[key].set({is_seen: 1});
                        menuitem[key].save();
                    })

                    res.status(200).send(menuitem)
                })
            }).catch((error) => {
                res.status(400).send('error');
            });
        }else{
            Object.entries(menuitem).forEach(([key, value]) => {
                menuitem[key].set({is_seen: 1});
                menuitem[key].save();
            })
            res.status(200).send(menuitem)
        }

    }).catch((error) => {
        res.status(400).send('error');
    });
})


router.get('/', (req, res) => {

    var category = req.query.category;

    var filter = req.query.filter;

    if (category && filter) {

        var conditions =  {
            where: {
                [Op.and]:
                [
                    {country: { [Op.eq]: req.query.country }},
                    {categories: { [Op.like]: '%' + req.query.category + '%' }},
                    {business_name: { [Op.like]: '%' + req.query.filter + '%' }}
                ]
            }
        };

    }else{
        var conditions = {
            where: {
                [Op.and]:
                [
                    {country: { [Op.eq]: req.query.country }},
                ]
            }
        };
    }

    FeaturedBusiness
    .findAll(conditions)
    .then((featured_business) => {
       if(featured_business.length == 0) {
           console.log('country',req.query.country);
          if (req.query.country == 'ita') {
            var table_name = 'VendorIta';
          } else {
            var codee = code.charAt(0).toUpperCase() + code.slice(1);
            var table_name = 'Vendor' + codee + 's';
          }
         
           DB.query("SELECT * FROM " + table_name +" LIMIT 10", function (err, profile) {
                    if (err) throw err;
                    if (profile[0]) {
                      res.status(201).send(profile)
                    } else {
                      res.status(401).send(console.log(err))
                    }
           });
       } else {
        res.status(201).send(featured_business)
       }
    }
    )
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
