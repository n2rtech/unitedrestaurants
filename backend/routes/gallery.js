const express = require('express');
const router = express.Router();
const Gallery = require('../models').Gallery;
const passport = require('passport');
require('../config/passport')(passport);
const path = require('path');
var fs = require('fs');

var multer  = require('multer');

const imageStorage = multer.diskStorage({
    destination: 'uploads/gallery', 
      filename: (req, file, cb) => {
        var image_na = file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname);
          cb(null, image_na);
          Gallery.create({image:image_na,user_id:req.user.id});
    }
});

const imageUpload = multer({
      storage: imageStorage,
      limits: {
        fileSize: 100000000
      },
      fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) { 
           return cb(new Error('Please upload a Image'))
         }
       cb(undefined, true)
    }
}) 

// Create a new Gallery
router.post('/', passport.authenticate('vendor', {
    session: false
}), imageUpload.array('image',12),  function (req, res) {
        if (!req.files[0]) {
            res.status(400).send({
                msg: 'Please pass Image.'
            })
        } else {

            res.status(200).send({
                msg: 'Gallery images uploaded.'
            })
        }
});

router.get('/', passport.authenticate('vendor', {
    session: false
}), function (req, res) {
    Gallery
    .findAll({where:{user_id:req.user.id}})
    .then((galleries) => res.status(200).send(galleries))
    .catch((error) => {
        res.status(400).send(error);
    });
});


router.get('/list/:id', (req, res) => {
    Gallery
    .findAll({where:{user_id:req.params.id}})
    .then((gallery) => res.status(200).send(gallery))
    .catch((error) => {
        res.status(400).send(error);
    });
});


// Delete a Gallery
router.delete('/:id', (req, res) => {
    if (!req.params.id) {
        res.status(400).send({
            msg: 'Please pass Gallery ID.'
        })
    } else {
        Gallery
        .findByPk(req.params.id)
        .then((gallery) => {
            if (gallery) {

                var filePath = path.resolve('./')+'/uploads/gallery/'+gallery.image; 
                fs.unlinkSync(filePath);

                Gallery.destroy({
                    where: {
                        id: req.params.id
                    }
                }).then(_ => {
                    res.status(200).send({
                        'message': 'Gallery deleted'
                    });
                }).catch(err => res.status(400).send(err));
            } else {
                res.status(404).send({
                    'message': 'Gallery not found'
                });
            }
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    }
});



module.exports = router;
