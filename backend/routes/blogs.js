const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const Blog = require('../models').Blog;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

// Create a new Blog
router.post('/', (req, res) => {
        if (!req.body.content) {
            res.status(400).send({
                msg: 'Please pass Blog Content.'
            })
        } else {
            Blog
                .create({
                    name: req.body.name,
                    content: req.body.content
                })
                .then((Blog) => res.status(201).send(Blog))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
        }
});

// Get List of Sale Items
router.get('/list', (req, res) => {
        Blog
            .findAll()
            .then((blog) => res.status(200).send(blog))
            .catch((error) => {
                res.status(400).send(error);
            });
});


router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {   
    Blog
    .findAll()
    .then((blog) => res.status(200).send(blog))
    .catch((error) => {
        res.status(400).send(error);
    });
});



router.get('/list/:id', (req, res) => {   
    Blog
    .findAll({where:{id:req.params.id}})
    .then((blog) => res.status(200).send(blog))
    .catch((error) => {
        res.status(400).send(error);
    });
});




// Get Blog by ID
router.get('/:id', (req, res) => {
    Blog
        .findOne({
            where:{
           id : req.params.id
        }})
        .then((blog) => res.status(200).send(blog))
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a Blog Items
router.put('/:id', function (req, res) {
        if (!req.body.content) {
            res.status(400).send({
                msg: 'Please pass Blog Content.'
            })
        } else {
            Blog
                .findByPk(req.params.id)
                .then((blog) => {
                    Blog.update({
                        name: req.body.name || blog.name,
                        content: req.body.content || blog.content
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Blog updated'
                        });
                    }).catch(err => res.status(400).send(err));
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
});



// Delete a Blog
router.delete('/:id', (req, res) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass Blog ID.'
            })
        } else {
            Blog
                .findByPk(req.params.id)
                .then((Blog) => {
                    if (Blog) {
                        Blog.destroy({
                            where: {
                                id: req.params.id
                            }
                        }).then(_ => {
                            res.status(200).send({
                                'message': 'Blog deleted'
                            });
                        }).catch(err => res.status(400).send(err));
                    } else {
                        res.status(404).send({
                            'message': 'Blog not found'
                        });
                    }
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
});



module.exports = router;
