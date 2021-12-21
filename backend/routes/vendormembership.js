const express = require('express');
const router = express.Router();
const VendorMembership = require('../models').VendorMembership;
const MembershipTransaction = require('../models').MembershipTransaction;
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
            })
            .catch((error) => {
                console.log(error);   
                res.status(400).send('error');
            });
        }
});


module.exports = router;
