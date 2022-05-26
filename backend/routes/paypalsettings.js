const express = require('express');
const router = express.Router();
const Paypalsettings = require('../models').Paypalsettings;
const passport = require('passport');
require('../config/passport')(passport);

router.get('/', function (req, res) {
    Paypalsettings
        .findAll()
        .then((users) => res.status(200).send(users))
        .catch((error) => {
          res.status(400).send(error);
        });
  });

router.put('/',  (req, res) => {

    if (!req.body.client_id || !req.body.secret) {
        res.status(400).send({
            msg: 'Please pass paypal client id and secret.'
        })
    } else {
        Paypalsettings
        .findByPk(1)
        .then((Paypalsettings) => {

            Paypalsettings.update({
                mode: req.body.mode ,
                client_id: req.body.client_id,
                secret: req.body.secret,
            }, {
                where: {
                    id: 1
                }
            }).then((dddd) => {

                res.status(200).send({
                    'message': 'Payal Setting updated'
                });
            }).catch(err => res.status(400).send(console.log(err)));
        })
        .catch((error) => {
            console.log(error)
            res.status(400).send('error');
        });
    }
});

router.get('/getaccesstoken/' , (req, res) => {

            var request = require('request');
            console.log("Tokens" , req.body.client_id);

            request.post({
                uri: "https://api.sandbox.paypal.com/v1/oauth2/token",
                headers: {
                    "Accept": "application/json",
                    "Accept-Language": "en_US",
                    "content-type": "application/x-www-form-urlencoded"
                },
                auth: {
                'user': req.body.client_id,
                'pass': req.body.secret
                // 'sendImmediately': false
            },
            form: {
                "grant_type": "client_credentials"
            }
            }, function(error, response, body) {
                console.log(body);
            });
     
    });

module.exports = router;
