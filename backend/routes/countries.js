const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Country = require('../models').Country;
const Permission = require('../models').Permission;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

// Create a new Country
router.post('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Countries').then((rolePerm) => {
        if (!req.body.name) {
            res.status(400).send({
                msg: 'Please pass Country name.'
            })
        } else {
            Country
                .create({
                    name: req.body.name,
                })
                .then((country) => res.status(201).send(country))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
        }
    }).catch((error) => {
        res.status(403).send(error);
    });
});

// Get List of countries
router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Countries').then((rolePerm) => {
        Country
            .findAll()
            .then((countries) => res.status(200).send(countries))
            .catch((error) => {
                res.status(400).send(error);
            });
    }).catch((error) => {
        res.status(403).send(error);
    });
});




// Get List of Countries
router.get('/list', (req, res) => {
    Country
    .findAll()
    .then((countries) => res.status(200).send(countries))
    .catch((error) => {
        res.status(400).send(error);
    });
});

// Get Country by ID
router.get('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Countries').then((rolePerm) => {

    }).catch((error) => {
        res.status(403).send(error);
    });
    Country
        .findByPk(
            req.params.id
        )
        .then((country) => { 
            if (country == null) {
               res.status(200).send({
                'status':false,
                'message':'country not found'
               }) 
            }
            res.status(200).send(country)
        })
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a Country
router.put('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Countries').then((rolePerm) => {
        if (!req.params.id || !req.body.name) {
            res.status(400).send({
                msg: 'Please pass Country ID, name.'
            })
        } else {
            Country
                .findByPk(req.params.id)
                .then((country) => {
                    if (country == null) {
                        res.status(200).send({
                            'message': 'Country not found'
                        });
                    }
                    Country.update({
                        name: req.body.name || country.name
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Country updated'
                        });
                    }).catch(err => res.status(400).send(err));
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
    }).catch((error) => {
        res.status(403).send(error);
    });
});

// Delete a Country
router.delete('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Countries').then((rolePerm) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass Country ID.'
            })
        } else {
            Country
                .findByPk(req.params.id)
                .then((country) => {
                    if (country) {
                        Country.destroy({
                            where: {
                                id: req.params.id
                            }
                        }).then(_ => {
                            res.status(200).send({
                                'message': 'Country deleted'
                            });
                        }).catch(err => res.status(400).send(err));
                    } else {
                        res.status(404).send({
                            'message': 'Country not found'
                        });
                    }
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
    }).catch((error) => {
        res.status(403).send(error);
    });
});

module.exports = router;
