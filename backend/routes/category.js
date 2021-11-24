const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const Category = require('../models').Category;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();
const path = require('path');


var multer  = require('multer');

const imageStorage = multer.diskStorage({
    destination: 'images', 
      filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
    }
});



const imageUpload = multer({
      storage: imageStorage,
      limits: {
        fileSize: 1000000 
      },
      fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) { 
           return cb(new Error('Please upload a Image'))
         }
       cb(undefined, true)
    }
}) 


// Create a new Category
router.post('/add', passport.authenticate('jwt', {
    session: false
}), imageUpload.single('image'),  function (req, res) {
    helper.checkPermission(req.user.role_id, 'Categories').then((rolePerm) => {
        if (!req.body.name || !req.body.description) {
            res.status(400).send({
                msg: 'Please pass Category name or description.'
            })
        } else {
            var slug = req.body.name
             .toLowerCase()
             .replace(/ /g, '-')
             .replace(/[^\w-]+/g, '');

            Category
                .create({
                    name: req.body.name,
                    description: req.body.description,
                    slug: slug,
                    image: req.file.filename,
                    parent_id: req.body.parent_id,
                    sort_order: req.body.sort_order,
                    status: req.body.status
                })
                .then((category) => res.status(201).send(category))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
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
    helper.checkPermission(req.user.role_id, 'Categories').then((rolePerm) => {
        Category
        .findAll({
            include: [
            {
                model: Category,
                as: 'parent_category',
                include: [
                {
                    model: Category,
                    as: 'parent_category',
                    include: [
                    {
                        model: Category,
                        as: 'parent_category',
                        include: [
                        {
                            model: Category,
                            as: 'parent_category',

                        }
                        ]

                    }
                    ]

                }
                ]
            },
            /*{
                model: Category,
                as: 'sub_category',
                include: [
                {
                    model: Category,
                    as: 'sub_category',
                    include: [
                    {
                        model: Category,
                        as: 'sub_category',
                        include: [
                        {
                            model: Category,
                            as: 'sub_category',

                        }
                        ]
                    }
                    ]
                }
                ]

            }*/
            ]

        })
            .then((category) => {

                res.status(200).send(category)
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    }).catch((error) => {
        res.status(403).send(error);
    });
});


// Get List of Roles
router.get("/list", (req, res) => {
    Category
    .findAll({
        where: {
          parent_id: 0
      }
  })
    .then((category) => {

        res.status(200).send(category)
    })
    .catch((error) => {
        res.status(400).send(error);
    });
});

// Get Role by ID
router.get('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Categories').then((rolePerm) => {

    }).catch((error) => {
        res.status(403).send(error);
    });
    Category
        .findByPk(
            req.params.id, {
                include: [
            {
                model: Category,
                as: 'parent_category',
                include: [
                {
                    model: Category,
                    as: 'parent_category',
                    include: [
                    {
                        model: Category,
                        as: 'parent_category',
                        include: [
                        {
                            model: Category,
                            as: 'parent_category',

                        }
                        ]

                    }
                    ]

                }
                ]
            },
            /*{
                model: Category,
                as: 'sub_category',
                include: [
                {
                    model: Category,
                    as: 'sub_category',
                    include: [
                    {
                        model: Category,
                        as: 'sub_category',
                        include: [
                        {
                            model: Category,
                            as: 'sub_category',

                        }
                        ]
                    }
                    ]
                }
                ]

            }*/
            ]
            }
        )
        .then((roles) => res.status(200).send(roles))
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a Role
router.put('/:id', passport.authenticate('jwt', {
    session: false
}), imageUpload.single('image'), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Categories').then((rolePerm) => {
        if (!req.params.id || !req.body.name || !req.body.description) {
            res.status(400).send({
                msg: 'Please pass Category ID, name or description.'
            })
        } else {
            Category
                .findByPk(req.params.id)
                .then((category) => {

                    if (req.file) {
                        var image = req.file.filename;
                    }else{
                        var image = category.image;
                    }

                    Category.update({
                        name: req.body.name || role.name,
                        description: req.body.description || role.description,
                        image: image
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Category updated'
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

// Delete a Role
router.delete('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Categories').then((rolePerm) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass ID.'
            })
        } else {
            Category
                .findByPk(req.params.id)
                .then((category) => {
                    if (category) {
                        Category.destroy({
                            where: {
                                id: req.params.id
                            }
                        }).then(_ => {
                            res.status(200).send({
                                'message': 'Category deleted'
                            });
                        }).catch(err => res.status(400).send(err));
                    } else {
                        res.status(404).send({
                            'message': 'Category not found'
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

// Add Permissions to Role
router.post('/permissions/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    helper.checkPermission(req.user.role_id, 'Categories').then((rolePerm) => {
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
