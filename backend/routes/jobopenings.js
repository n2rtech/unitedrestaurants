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

// Create a new Job
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

// Get List of Jobs
router.get('/list', (req, res) => {
    JobOpening
    .findAll()
    .then((jobs) => res.status(200).send(jobs))
    .catch((error) => {
        res.status(400).send(error);
    });
});


router.get('/list/:id', (req, res) => {
    JobOpening
    .findAll({where:{user_id:req.params.id}})
    .then((jobs) => res.status(200).send(jobs))
    .catch((error) => {
        res.status(400).send(error);
    });
});


router.get('/', passport.authenticate('vendor', {
    session: false
}), function (req, res) {
    JobOpening
    .findAll({where:{user_id:req.user.id}})
    .then((jobs) => res.status(200).send(jobs))
    .catch((error) => {
        res.status(400).send(error);
    });
});



// Get Job by ID
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

// Update a Job
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

// Delete a Job
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


router.delete('/delete/:id', (req, res) => {
    console.log("USer" ,req.params.id);
      if (!req.params.id) {
        res.status(400).send({
          msg: 'Please pass user ID.'
        })
      } else {
        User
          .findByPk(req.params.id)
          .then((user) => {
            
            if (user) {
              User.destroy({
                where: {
                  id: req.params.id
                }
              }).then(_ => {
                res.status(200).send({
                  'message': 'User deleted'
                });
              }).catch(err => res.status(400).send(err));
            } else {
              res.status(404).send({
                'message': 'User not found'
              });
            }
          })
          .catch((error) => {
            res.status(400).send(error);
          });
      }
  });

module.exports = router;
