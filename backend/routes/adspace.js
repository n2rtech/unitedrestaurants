const express = require('express');
const router = express.Router();
const AdSpace = require('../models').AdSpace;
const passport = require('passport');
require('../config/passport')(passport);
const path = require('path');
var fs = require('fs');

var multer  = require('multer');

const imageStorage = multer.diskStorage({
    destination: 'uploads/adspaces', 
      filename: (req, file, cb) => {
        var image_na = file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname);
          cb(null, image_na);
          // AdSpace.create({image:image_na,link:req.body.link,user_id:req.user.id});
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

// Create a new AdSpace
router.post('/', passport.authenticate('jwt', {
    session: false
}), imageUpload.single('image'),  function (req, res) {
        if (!req.file) {
            res.status(400).send({
                msg: 'Please pass Image.'
            })
        } else {
            AdSpace.create({image:req.file.filename,link:req.body.link,user_id:req.user.id});
            res.status(400).send({
                msg: 'Ad Space added.'
            })
        }
});

router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    AdSpace
    .findAll({where:{user_id:req.user.id}})
    .then((jobs) => res.status(200).send(jobs))
    .catch((error) => {
        res.status(400).send(error);
    });
});


// Delete a AdSpace
router.delete('/:id', (req, res) => {
    if (!req.params.id) {
        res.status(400).send({
            msg: 'Please pass AdSpace ID.'
        })
    } else {
        AdSpace
        .findByPk(req.params.id)
        .then((adspace) => {
            if (adspace) {

                var filePath = path.resolve('./')+'/uploads/adspaces/'+adspace.image; 
                fs.unlinkSync(filePath);

                AdSpace.destroy({
                    where: {
                        id: req.params.id
                    }
                }).then(_ => {
                    res.status(200).send({
                        'message': 'Ad Space deleted'
                    });
                }).catch(err => res.status(400).send(err));
            } else {
                res.status(404).send({
                    'message': 'Ad Space not found'
                });
            }
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    }
});



module.exports = router;
