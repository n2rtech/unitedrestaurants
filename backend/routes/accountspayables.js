const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const AccountsPayable = require('../models').AccountsPayable;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

// Create a new AccountsPayable
router.post('/', (req, res) => {
        if (!req.body.name || !req.body.description) {
            res.status(400).send({
                msg: 'Please pass Job name or description.'
            })
        } else {
            AccountsPayable
                .create({
                    name: req.body.name,
                    user_id: req.body.user_id,
                    description: req.body.description
                })
                .then((accountspayable) => res.status(201).send(accountspayable))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
        }
});

// Get List of AccountsPayables


router.get('/list', (req, res) => {
        AccountsPayable
            .findAll()
            .then((accountspayables) => res.status(200).send(accountspayables))
            .catch((error) => {
                res.status(400).send(error);
            });
});


router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {   
    AccountsPayable
    .findAll()
    .then((accountspayables) => res.status(200).send(accountspayables))
    .catch((error) => {
        res.status(400).send(error);
    });
});



// Get AccountsPayable by ID
router.get('/:id', (req, res) => {
    AccountsPayable
        .findByPk(
            req.params.id
        )
        .then((accountspayable) => {
            if (accountspayable == null) {
                res.status(200).send({'message': 'not found'})
            }
            res.status(200).send(accountspayable)
        })
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a AccountsPayable
router.put('/:id', function (req, res) {
        if (!req.params.id || !req.body.name || !req.body.description) {
            res.status(400).send({
                msg: 'Please pass Job ID, name or description.'
            })
        } else {
            AccountsPayable
                .findByPk(req.params.id)
                .then((accountspayable) => {
                    if (accountspayable == null) {
                        res.status(200).send({
                            'message': 'Accounts Payable not found'
                        });
                    }
                    AccountsPayable.update({
                        name: req.body.name || accountspayable.name,
                        description: req.body.description || accountspayable.description
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Accounts Payable updated'
                        });
                    }).catch(err => res.status(400).send(err));
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
});

// Delete a AccountsPayable
router.delete('/:id', (req, res) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass accountspayable ID.'
            })
        } else {
            AccountsPayable
                .findByPk(req.params.id)
                .then((accountspayable) => {
                    if (accountspayable) {
                        AccountsPayable.destroy({
                            where: {
                                id: req.params.id
                            }
                        }).then(_ => {
                            res.status(200).send({
                                'message': 'Accounts Payable deleted'
                            });
                        }).catch(err => res.status(400).send(err));
                    } else {
                        res.status(404).send({
                            'message': 'Accounts Payable not found'
                        });
                    }
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
});

module.exports = router;
