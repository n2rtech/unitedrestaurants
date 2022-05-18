const express = require('express');
const router = express.Router();
const {DB} = require('../config/database');
const VendorMembership = require('../models').VendorMembership;
const Membership = require('../models').Membership;
const MembershipTransaction = require('../models').MembershipTransaction;
const FeaturedBusiness = require('../models').FeaturedBusiness;
const Vendor = require('../models').Vendor;
const passport = require('passport');
require('../config/passport')(passport);
const path = require('path');
var fs = require('fs');

var multer  = require('multer');

const imageStorage = multer.diskStorage({
    destination: 'uploads/adspaces', 
      filename: (req, file, cb) => {
        var image_na = file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname);
          cb(null, image_na);
          // VendorMembership.create({image:image_na,link:req.body.link,user_id:req.user.id});
    }
});

const imageUpload = multer({
      storage: imageStorage,
      limits: {
        fileSize: 100000000
      },
      fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) { 
           return cb(new Error('Please upload a Image'))
         }
       cb(undefined, true)
    }
}) 

// Create a new VendorMembership
router.post('/', passport.authenticate('jwt', {
    session: false
}), imageUpload.single('image'),  function (req, res) {
        if (!req.file) {
            res.status(400).send({
                msg: 'Please pass Image.'
            })
        } else {
            VendorMembership.create({image:req.file.filename,link:req.body.link,user_id:req.user.id});
            res.status(400).send({
                msg: 'Ad Space added.'
            })
        }
});

router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    VendorMembership
    .findAll(/*{where:{user_id:req.user.id}}*/)
    .then((jobs) => res.status(200).send(jobs))
    .catch((error) => {
        res.status(400).send(error);
    });
});


router.get('/plan-list', function (req, res) {
    Membership
    .findAll()
    .then((results) => res.status(200).send(results))
    .catch((error) => {
        res.status(400).send(error);
    });
});

// router.get('/plan-list-array', function (req, res) {
//     Membership
//     .findAll()
//     .then((results) => res.status(200).send(results))
//     .catch((error) => {
//         res.status(400).send(error);
//     });
// });

router.get('/plan-list-array', (req, res) => {
    Membership
    .findAll()
    .then((result) => {
      Membership
      .findAll({ where:{
        plan_type: 'free'
      }
    })
      .then((free) => {
        Membership
      .findAll({ where:{
        plan_type: 'standard'
      },
    })
    .then((standard) => {
        Membership
      .findAll({ where:{
        plan_type: 'premium'
      },
    })
      .then((premium) => {
        res.status(200).send({
          'free': free,
          'standard' : standard,
          'premium' : premium
        })
      })
      .catch((error) => {
        res.status(400).send('error');
      });
      })
      .catch((error) => {
        res.status(400).send('error');
      });
      })
      .catch((error) => {
        res.status(400).send('error');
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send('error1');
    });
  });

// Activate Plan
router.put('/activate-plan/:id', function (req, res) {
    Membership
        .findByPk(req.params.id)
        .then((job) => {
            Membership.update({
                status: 1,
            }, {
                where: {
                    id: req.params.id
                }
            }).then(_ => {
                res.status(200).send({
                    'message': 'Plan de-activated'
                });
            }).catch(err => res.status(400).send(err));
        })
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Deactivate Plan
router.put('/deactivate-plan/:id', function (req, res) {
        Membership
            .findByPk(req.params.id)
            .then((job) => {
                Membership.update({
                    status: 0,
                }, {
                    where: {
                        id: req.params.id
                    }
                }).then(_ => {
                    res.status(200).send({
                        'message': 'Plan de-activated'
                    });
                }).catch(err => res.status(400).send(err));
            })
            .catch((error) => {
                res.status(400).send(error);
            });
});

// Delete a VendorMembership
router.delete('/:id', (req, res) => {
    if (!req.params.id) {
        res.status(400).send({
            msg: 'Please pass VendorMembership ID.'
        })
    } else {
        VendorMembership
        .findByPk(req.params.id)
        .then((adspace) => {
            if (adspace) {

                var filePath = path.resolve('./')+'/uploads/adspaces/'+adspace.image; 
                fs.unlinkSync(filePath);

                VendorMembership.destroy({
                    where: {
                        id: req.params.id
                    }
                }).then(_ => {
                    res.status(200).send({
                        'message': 'Ad Space deleted'
                    });
                }).catch(err => res.status(400).send(err));
            } else {
                res.status(404).send({
                    'message': 'Ad Space not found'
                });
            }
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    }
});

// Add New Membership Plans

router.post('/plan-save', (req, res) => {
    if (!req.body.name || !req.body.description) {
        res.status(400).send({
            msg: 'Please pass Plan name or description.'
        })
    }
    if(req.body.discount == 0) {
        Membership
        .findAll({where:{discount:0, plan_type : req.body.plan_type}})
        .then((job) => {
               if(job.length > 0) {
                  res.status(201).send({error: "Already created for this interval plan"})
               } else {
                Membership
                .create({
                    name: req.body.name,
                    user_id: req.body.user_id,
                    description: req.body.description,
                    create_time: req.body.create_time,
                    plan_id: req.body.plan_id,
                    product: req.body.product_id,
                    plan_type: req.body.plan_type,
                    price: req.body.price,
                    interval: req.body.interval,
                    status: 1,
                    discount: req.body.discount,
                    discount_coupon_id: req.body.coupon_id
                })
                res.status(201).send({msg: "Plan is successfully created"})
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
               }
        }).catch((erro) => {

        })
    } else {
        Membership
            .create({
                name: req.body.name,
                user_id: req.body.user_id,
                description: req.body.description,
                create_time: req.body.create_time,
                plan_id: req.body.plan_id,
                product: req.body.product_id,
                plan_type: req.body.plan_type,
                price: req.body.price,
                interval: req.body.interval,
                status: 1,
                discount: req.body.discount,
                discount_coupon_id: req.body.coupon_id
            })
            res.status(201).send({msg: "Plan is successfully created"})
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
    }
});

// assign membership to user a Membership
router.put('/asign-to-user/:id', (req, res) => {
        if (!req.params.id || !req.body.membership_id) {
            res.status(400).send({
                msg: 'Please pass User Id or Membership ID.'
            })
        } else {

            switch (req.body.interval) {
                case 'Monthly':
                day = 1;
                break;
                case 'HalfYearly':
                day = 6;
                break;
                case 'Quarterly':
                day = 3;
                break;
                case 'Yearly':
                day = 12;
                break;
                default:
                day = 12;
            }

            const date = new Date()
            date.setMonth(date.getMonth() + day);

            Vendor
            .findByPk(req.params.id)
            .then((vendor) => {

                var table_name = 'countries'.charAt(0).toUpperCase() + 'countries'.slice(1);
                DB.query('SELECT code,name FROM '+table_name+' WHERE id ="' + req.body.country_id +'"', function (err, country) {
                
                    if (err) throw err;
                    if (country[0]) {
                      var code = country[0].code;
                      var country = country[0].code;

                      if (code == 'ita') {
                        var table_name = 'VendorIta';
                      } else {
                        var codee = code.charAt(0).toUpperCase() + code.slice(1);
                        var table_name = 'Vendor' + codee + 's';
                      }

                      DB.query('SELECT * FROM '+table_name+' WHERE user_id ="' + req.params.id+'"', function (err, vendor_pro) {
                        if (err) throw err;
                        if (vendor_pro[0]) {
                            
                            var categ = vendor_pro[0].categories;  
                            var name = vendor_pro[0].business_name;
                            var banner = vendor_pro[0].banner;
                            var about_business = vendor_pro[0].about_business;

                            FeaturedBusiness.update({
                                user_id: req.params.id ,
                                country_id: req.body.country_id ,
                                country: country ,
                                business_name: name ,
                                about_business: about_business ,
                                membership_id: req.body.membership_id ,
                                categories: categ ,
                                banner: banner
                            }, {
                                where: {
                                    user_id: req.params.id
                                }
                            })

                            Vendor.update({
                                membership_id: req.body.membership_id || membership.membership_id,
                                membership_start_date:new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
                                membership_end_date:date.toISOString().replace(/T/, ' ').replace(/\..+/, '')
                            }, {
                                where: {
                                    id: req.params.id
                                }
                            }).then(_ => {
                                MembershipTransaction
                                .create({
                                    price: req.body.price,
                                    type: 'membership',
                                    user_id: req.params.id,
                                    membership_subscription_id: req.body.membership_subscription_id,
                                    membership_id: req.body.membership_id,
                                    comment: req.body.comment,
                                    start_date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
                                    end_date: date.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
                                    interval: req.body.interval
                                })
                                .then((wallet) => {
                                    res.status(201).send(wallet)
                                })
                                .catch((error) => {
                                    res.status(400).send('error4');
                                });
            
                            }).catch(err => {
                                console.log(err);   
                                res.status(400).send('err1')
                            });


                        }else{
                          res.status(200).send({
                            'message': 'User updated2'
                          });
                        }
                      })
                    
                    }else{
                      res.status(400).send(err);
                    }
                });
            })
            .catch((error) => {
                console.log(error);   
                res.status(400).send('error');
            });
        }
});


module.exports = router;
