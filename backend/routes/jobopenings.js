const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const JobOpening = require('../models').JobOpening;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

// Create a new Role
router.post('/', (req, res) => {
        if (!req.body.job_name || !req.body.job_description) {
            res.status(400).send({
                msg: 'Please pass Job name or description.'
            })
        } else {
            JobOpening
                .create({
                    job_name: req.body.job_name,
                    user_id: req.body.user_id,
                    job_description: req.body.job_description
                })
                .then((job) => res.status(201).send(job))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
        }
});

// Get List of Roles
router.get('/', (req, res) => {
        JobOpening
            .findAll()
            .then((jobs) => res.status(200).send(jobs))
            .catch((error) => {
                res.status(400).send(error);
            });
});

// Get Role by ID
router.get('/:id', (req, res) => {
    JobOpening
        .findByPk(
            req.params.id
        )
        .then((jobs) => res.status(200).send(jobs))
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a Role
router.put('/:id', function (req, res) {
        if (!req.params.id || !req.body.job_name || !req.body.job_description) {
            res.status(400).send({
                msg: 'Please pass Job ID, name or description.'
            })
        } else {
            JobOpening
                .findByPk(req.params.id)
                .then((job) => {
                    JobOpening.update({
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

// Delete a Role
router.delete('/:id', (req, res) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass job ID.'
            })
        } else {
            JobOpening
                .findByPk(req.params.id)
                .then((job) => {
                    if (job) {
                        JobOpening.destroy({
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

// Add Permissions to Role
router.post('/permissions/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Roles & Permission').then((rolePerm) => {
        if (!req.body.permissions) {
            res.status(400).send({
                msg: 'Please pass permissions.'
            })
        } else {
            Role
                .findByPk(req.params.id)
                .then((role) => {
                    req.body.permissions.forEach(function (item, index) {
                        Permission
                            .findByPk(item)
                            .then(async (perm) => {
                                await role.addPermissions(perm, {
                                    through: {
                                        selfGranted: false
                                    }
                                });
                            })
                            .catch((error) => {
                                res.status(400).send(error);
                            });
                    });
                    res.status(200).send({
                        'message': 'Permissions added'
                    });
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
