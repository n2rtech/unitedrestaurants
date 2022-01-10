const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const Blog = require('../models').Blog;
const passport = require('passport');
require('../config/passport')(passport);
const path = require('path');
var fs = require('fs');
var multer  = require('multer');



const imageStorage = multer.diskStorage({
    destination: 'uploads/blogs', 
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




// Create a new Blog
router.post('/', imageUpload.single('image'), (req, res) => {
        if (!req.body.content) {
            res.status(400).send({
                msg: 'Please pass Blog Content.'
            })
        } else {

            if (req.file) {
                image = req.file.filename;
             }else{
                image = '';
             }
             
            Blog
                .create({
                    name: req.body.name,
                    image: image,
                    show_on_home: req.body.show_on_home,
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
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);
    Blog
    .findAndCountAll({offset, limit })
    .then(perms => {
        const response = getPagingData(perms, page, limit);
        res.status(200).send(response)
    })
    .catch((error) => {
        res.status(400).send(error);
    });
});


router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {   
    Blog
    .findAll({
        order: [ [ 'createdAt', 'DESC' ]]
    })
    .then((blog) => res.status(200).send(blog))
    .catch((error) => {
        res.status(400).send(error);
    });
});


router.get('/get', (req, res) => { 
    Blog
    .findAll({
        where:{show_on_home:1},
        order: [ [ 'createdAt', 'DESC' ]]
    })
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
router.put('/:id',imageUpload.single('image'), function (req, res) {
        if (!req.body.content) {
            res.status(400).send({
                msg: 'Please pass Blog Content.'
            })
        } else {
            Blog
                .findByPk(req.params.id)
                .then((blog) => {

                    if (req.file) {
                        var image = req.file.filename;
                        if (blog.image) {
                            var filePath = path.resolve('./')+'/uploads/blogs/'+blog.image; 
                            //fs.unlinkSync(filePath);
                        }
                    }else{
                        var image = blog.image;
                    }

                    Blog.update({
                        name: req.body.name || blog.name,
                        content: req.body.content || blog.content,
                        show_on_home: req.body.show_on_home || blog.show_on_home,
                        image: image
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
                .then((blog) => {
                    if (blog) {
                        var filePath = path.resolve('./')+'/uploads/blogs/'+blog.image; 
                        //fs.unlinkSync(filePath);

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


const getPagination = (page=1, size) => {
  const limit = size ? +size : 3;
  const offset =  (page-1) * limit;

  return { limit, offset };
};


const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: blogs } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, tutorials, totalPages, currentPage };
};


module.exports = router;
