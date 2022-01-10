const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const GoogleAdsense = require('../models').GoogleAdsense;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

// Create a new GoogleAdsense
router.post('/', (req, res) => {
        if (!req.body.deal_name || !req.body.deal_description) {
            res.status(400).send({
                msg: 'Please pass sale item name or description.'
            })
        } else {
            GoogleAdsense
                .create({
                    deal_name: req.body.deal_name,
                    user_id: req.body.user_id,
                    deal_description: req.body.deal_description
                })
                .then((googleadsense) => res.status(201).send(googleadsense))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
        }
});

// Get List of Sale Items
router.get('/list', (req, res) => {
        GoogleAdsense
            .findAll()
            .then((googleadsense) => res.status(200).send(googleadsense))
            .catch((error) => {
                res.status(400).send(error);
            });
});


router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {   
    GoogleAdsense
    .findAll({where:{user_id:req.user.id}})
    .then((googleadsense) => res.status(200).send(googleadsense))
    .catch((error) => {
        res.status(400).send(error);
    });
});



router.get('/list/:id', (req, res) => {   
    GoogleAdsense
    .findAll({where:{user_id:req.params.id}})
    .then((googleadsense) => res.status(200).send(googleadsense))
    .catch((error) => {
        res.status(400).send(error);
    });
});




// Get GoogleAdsense by ID
router.get('/:id', (req, res) => {
    GoogleAdsense
        .findOne({
            where:{
           user_id : req.params.id
        }})
        .then((googleadsense) => {
            if (googleadsense == null) {
                GoogleAdsense
                .create({
                    name: '',
                    user_id: req.params.id,
                    publisher_id: ''
                })
                .then((googleadsense) => res.status(201).send(googleadsense))
                .catch((error) => {
                    res.status(400).send(error);
                });
            }else{
               res.status(201).send(googleadsense); 
            }
        })
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a Menu Items
router.put('/:id', function (req, res) {
        if (!req.params.id || !req.body.publisher_id) {
            res.status(400).send({
                msg: 'Please pass ID and Publisher Id.'
            })
        } else {
            GoogleAdsense
                .findByPk(req.params.id)
                .then((googleadsense) => {
                    GoogleAdsense.update({
                        publisher_id: req.body.publisher_id
                    }, {
                        where: {
                            user_id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Google Adsense updated'
                        });
                    }).catch(err => res.status(400).send(err));
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
});



module.exports = router;
