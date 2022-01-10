const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Vendor = require('../models').Vendor;
const Permission = require('../models').Permission;
const Transaction = require('../models').Transaction;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();
var sequelize = require('sequelize');
// Create a new Job
router.post('/', (req, res) => {
    if (!req.body.amount) {
        res.status(400).send({
            msg: 'Please pass wallet balance.'
        })
    } else {
        Vendor.update({
            wallet_balance: sequelize.literal('wallet_balance +' + req.body.amount)
            //wallet_balance:req.body.amount
        }, { where: {
            id: req.body.user_id
        }
    }).then((wallet) => {
        Transaction
        .create({
            amount: req.body.amount,
            user_id: req.body.user_id,
            transaction_id: req.body.transaction_id,
            comment: req.body.comment,
            type: req.body.type
        })
        .then((wallet) => res.status(201).send(wallet))
        .catch((error) => {
            res.status(400).send(error);
        });

    })

}
});

// Get List of Jobs
router.get('/list', (req, res) => {
    Transaction
    .findAll()
    .then((jobs) => res.status(200).send(jobs))
    .catch((error) => {
        res.status(400).send(error);
    });
});


router.get('/list/:id', (req, res) => {
    Transaction
    .findAll({where:{user_id:req.params.id}})
    .then((jobs) => res.status(200).send(jobs))
    .catch((error) => {
        res.status(400).send(error);
    });
});


router.get('/', passport.authenticate('vendor', {
    session: false
}), function (req, res) {
  
    Transaction
    .findAll({where:{user_id:req.user.id}})
    .then((jobs) => res.status(200).send(jobs))
    .catch((error) => {
        res.status(400).send(error);
    });
});



// Get Job by ID
router.get('/:id', (req, res) => {
    console.log("userid", req.params.id);
    Vendor
        .findByPk(
            req.params.id
        )
        .then((vendor) => res.status(200).send(vendor))
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a Job
router.put('/:id', function (req, res) {
        if (!req.params.id || !req.body.job_name || !req.body.job_description) {
            res.status(400).send({
                msg: 'Please pass Job ID, name or description.'
            })
        } else {
            Transaction
                .findByPk(req.params.id)
                .then((job) => {
                    Transaction.update({
                        job_name: req.body.job_name || job.job_name,
                        user_id: req.body.user_id || job.user_id,
                        job_description: req.body.job_description || job.job_description
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Job updated'
                        });
                    }).catch(err => res.status(400).send(err));
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
});

// Delete a Job
router.delete('/:id', (req, res) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass job ID.'
            })
        } else {
            Transaction
                .findByPk(req.params.id)
                .then((job) => {
                    if (job) {
                        Transaction.destroy({
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
