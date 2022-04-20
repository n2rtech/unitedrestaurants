const express = require('express');
const router = express.Router();
const User = require('../models').User;
const {DB} = require('../config/database');
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const VendorCoupon = require('../models').VendorCoupon;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

// Create a new VendorCoupon
router.post('/', (req, res) => {
        if (!req.body.deal_name || !req.body.deal_description) {
            res.status(400).send({
                msg: 'Please pass Job name or description.'
            })
        } else {

            console.log('Coupons Data' , req.body);
            
            VendorCoupon
                .create({
                    deal_name: req.body.deal_name,
                    user_id: req.body.user_id,
                    deal_description: req.body.deal_description,
                    discount: req.body.discount,
                    start_date: req.body.start_date,
                    end_date: req.body.end_date
                })
                .then((vendorcoupon) => 
                   
                {

                    if (req.body.discount > 19) {
                        var table_name = 'countries'.charAt(0).toUpperCase() + 'countries'.slice(1);
                        DB.query('SELECT code,name FROM '+table_name+' WHERE id ="' + req.body.country_id +'"', function (err, country) {
                          if (err) throw err;
                          if (country[0]) {
                            var code = country[0].code;
                            var country = country[0].code;
                
                            if (code == 'ita') {
                              var table_namew = 'VendorIta';
                            }else{
                              var codee = code.charAt(0).toUpperCase() + code.slice(1);
                              var table_namew = 'Vendor' + codee + 's';
                            }
                
                            DB.query('SELECT * FROM '+table_namew+' WHERE user_id ="' + req.body.user_id +'"', function (err, vendor_pro) {
                              if (err) throw err;
                              if (vendor_pro[0]) {
                
                                var user_id = req.body.user_id;
                                var country_id = req.body.country_id;
                                var banner = vendor_pro[0].banner;
                                var business_name = vendor_pro[0].business_name;
                                var about_business = vendor_pro[0].about_business;
                             
                                DB.query("INSERT INTO HotDeals (user_id, `coupon_id` , `country_id`, `country`, `business_name`, `about_business`, `banner`, `discount` , `start_date` , `end_date`, `createdAt`, `updatedAt`) VALUES ("+user_id+", '"+vendorcoupon.id+"', '"+country_id+"', '"+country+"', '"+business_name+"', '"+about_business+"', '"+banner+"', '"+req.body.discount+"' , '"+req.body.start_date+"' , '"+req.body.end_date+"' , NOW(), '')");
                                
                                res.status(200).send(vendorcoupon);
                              }else{
                                res.status(200).send(vendorcoupon);
                              }
                            })
                          }else{
                            res.status(200).send(vendorcoupon);
                          }
                        })
                    } else {
                        res.status(200).send(vendorcoupon);
                    }
                }
                
                )
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });

                
        }
});

// Get List of VendorCoupons

// res.status(201).send(vendorcoupon)


router.get('/list', (req, res) => {
    VendorCoupon
    .findAll()
    .then((vendorcoupons) => res.status(200).send(vendorcoupons))
    .catch((error) => {
        res.status(400).send(error);
    });
});


router.get('/list/:id', (req, res) => {
    VendorCoupon
    .findAll({where:{user_id:req.params.id}})
    .then((vendorcoupons) => res.status(200).send(vendorcoupons))
    .catch((error) => {
        res.status(400).send(error);
    });
});


router.get('/', passport.authenticate('vendor', {
    session: false
}), function (req, res) {   
    VendorCoupon
    .findAll({where:{user_id:req.user.id}})
    .then((vendorcoupons) => res.status(200).send(vendorcoupons))
    .catch((error) => {
        res.status(400).send(error);
    });
});



// Get VendorCoupon by ID
router.get('/:id', (req, res) => {
    VendorCoupon
        .findByPk(
            req.params.id
        )
        .then((vendorcoupons) => res.status(200).send(vendorcoupons))
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a VendorCoupon
router.put('/:id', function (req, res) {
        if (!req.params.id || !req.body.deal_name || !req.body.deal_description) {
            res.status(400).send({
                msg: 'Please pass Job ID, name or description.'
            })
        } else {
            VendorCoupon
                .findByPk(req.params.id)
                .then((vendorcoupon) => {
                    VendorCoupon.update({
                        deal_name: req.body.deal_name || vendorcoupon.deal_name,
                        user_id: req.body.user_id || vendorcoupon.user_id,
                        deal_description: req.body.deal_description || vendorcoupon.deal_description,
                        discount: req.body.discount || vendorcoupon.discount,
                        start_date: req.body.start_date || vendorcoupon.start_date,
                        end_date: req.body.end_date || vendorcoupon.end_date
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        console.log('UPDATING VENDOR COUPON WITH HOT DEALS');
                        var table_name = 'countries'.charAt(0).toUpperCase() + 'countries'.slice(1);
                        DB.query('SELECT code,name FROM '+table_name+' WHERE id ="' + req.body.country_id +'"', function (err, country) {
                          if (err) throw err;
                          if (country[0]) {
                            var code = country[0].code;
                            var country = country[0].code;
                        
                            if (code == 'ita') {
                              var table_name = 'VendorIta';
                            }else{
                              var codee = code.charAt(0).toUpperCase() + code.slice(1);
                              var table_name = 'Vendor' + codee + 's';
                            }
                        
                            DB.query('SELECT * FROM '+table_name+' WHERE user_id ="' + req.body.user_id +'"', function (err, vendor_pro) {
                              if (err) throw err;
                              if (vendor_pro[0]) {
                        
                                var user_id = req.body.user_id;
                                var coupon_id = req.body.coupon_id;
                                var country_id = req.body.country_id;
                                var banner = vendor_pro[0].banner;
                                var business_name = vendor_pro[0].business_name;
                                var about_business = vendor_pro[0].about_business;
                                DB.query("DELETE  FROM HotDeals where coupon_id="+coupon_id);
                                
                                if(req.body.discount > 19) {
                                    DB.query("INSERT INTO HotDeals (user_id, `coupon_id` , `country_id`, `country`, `business_name`, `about_business`, `banner`, `discount` , `start_date` , `end_date`, `createdAt`, `updatedAt`) VALUES ("+user_id+", '"+coupon_id+"', '"+country_id+"', '"+country+"', '"+business_name+"', '"+about_business+"', '"+banner+"', '"+req.body.discount+"' , '"+req.body.start_date+"' , '"+req.body.end_date+"' , NOW(), '')");
                                }
                               
                                res.status(200).send(vendorcoupon);
                              }else{
                                res.status(200).send(vendorcoupon);
                              }
                            })
                          }else{
                            res.status(200).send(vendorcoupon);
                          }
                        })
                        
                    }).catch(err => res.status(400).send(err));
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
});

// res.status(200).send({
    //'message': 'Vendor Coupon updated'
// });

// Delete a VendorCoupon
router.delete('/:id', (req, res) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass vendorcoupon ID.'
            })
        } else {
            VendorCoupon
                .findByPk(req.params.id)
                .then((vendorcoupon) => {
                    if (vendorcoupon) {
                        VendorCoupon.destroy({
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
