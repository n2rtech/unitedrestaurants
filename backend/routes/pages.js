const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Page = require('../models').Page;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

// Create a new Role
router.post('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'role_add').then((rolePerm) => {
        if (!req.body.title) {
            res.status(400).send({
                msg: 'Please pass Tile.'
            })
        } else if (!req.body.body) {
            res.status(400).send({
                msg: 'Please pass Body.'
            })
        }else {      
            isIdUnique(req.body.title).then(isUnique => {
                if (isUnique) {
                    Page
                    .create({
                        title: req.body.title,
                        body: req.body.body
                    })
                    .then((role) => res.status(201).send(role))
                    .catch((error) => {
                        res.status(400).send(error);
                    });
                }else{

                    res.status(400).send({
                        msg: 'Page alrady exist!.'
                    });
                }
            });            
        }
    }).catch((error) => {
        res.status(403).send(error);
    });
});

// Get List of Roles
router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'role_get_all').then((rolePerm) => {
        console.log(rolePerm);
        Page
            .findAll({})
            .then((roles) => res.status(200).send(roles))
            .catch((error) => {
                res.status(400).send(error);
            });
    }).catch((error) => {
        res.status(403).send(error);
    });
});

// Get Role by ID
router.get('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'role_add').then((rolePerm) => {

    }).catch((error) => {
        res.status(403).send(error);
    });
    Page
        .findByPk(
            req.params.id
        )
        .then((roles) => res.status(200).send(roles))
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a Role
router.put('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'role_add').then((rolePerm) => {
        if (!req.params.id || !req.body.title || !req.body.body) {
            res.status(400).send({
                msg: 'Please pass Role ID, title or description.'
            })
        } else {            

            Page
                .findByPk(req.params.id)
                .then((page) => {
                    if (page == null) {
                        res.status(200).send({
                            'message': 'Page not found'
                        });
                    }
                    if (req.body.title) {
                        var slug = req.body.title
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '');
                    }else{
                        var slug = page.slug;
                    }
                    Page.update({
                        title: req.body.title || page.title,
                        slug: slug,
                        body: req.body.body || page.body
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Page updated'
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

// Delete a Page
router.delete('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'role_add').then((rolePerm) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass role ID.'
            })
        } else {
            Page
                .findByPk(req.params.id)
                .then((role) => {
                    if (role) {
                        Page.destroy({
                            where: {
                                id: req.params.id
                            }
                        }).then(_ => {
                            res.status(200).send({
                                'message': 'Page deleted'
                            });
                        }).catch(err => res.status(400).send(err));
                    } else {
                        res.status(404).send({
                            'message': 'Page not found'
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


function isIdUnique (value) {
    return Page.count({ where: { title: value } })
      .then(count => {
        if (count !== 0) {
          return false;
        }
        return true;
    });
}



module.exports = router;
