const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const SaleItem = require('../models').SaleItem;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();
const path = require('path');
var multer  = require('multer');

// Create a new SaleItem
router.post('/', (req, res) => {
        if (!req.body.deal_name || !req.body.deal_description) {
            res.status(400).send({
                msg: 'Please pass sale item name or description.'
            })
        } else {
            SaleItem
                .create({
                    deal_name: req.body.deal_name,
                    user_id: req.body.user_id,
                    deal_description: req.body.deal_description
                })
                .then((saleitem) => res.status(201).send(saleitem))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
        }
});


const imageStorage = multer.diskStorage({
    destination: 'uploads/salesitems', 
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


// Create a new Sales Items
router.post('/add', imageUpload.single('image'),  function (req, res) {
        if (!req.body.name || !req.body.content) {
            res.status(400).send({
                msg: 'Please pass sale item name or description.'
            })
        } else {
            

             if (req.file) {
                image = req.file.filename;
             }else{
                image = '';
             }

             SaleItem
                .create({
                    name: req.body.name,
                    user_id: req.body.user_id,
                    image: image,
                    content: req.body.content
                })
                .then((saleitem) => res.status(201).send(saleitem))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send('error');
                });
        }
});

// Get List of Sale Items
router.get('/list', (req, res) => {
        SaleItem
            .findAll()
            .then((saleitem) => res.status(200).send(saleitem))
            .catch((error) => {
                res.status(400).send(error);
            });
});


router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {   
    SaleItem
    .findAll({where:{user_id:req.user.id}})
    .then((saleitem) => res.status(200).send(saleitem))
    .catch((error) => {
        res.status(400).send(error);
    });
});



router.get('/list/:id', (req, res) => {   
    SaleItem
    .findAll({where:{user_id:req.params.id}})
    .then((saleitem) => res.status(200).send(saleitem))
    .catch((error) => {
        res.status(400).send(error);
    });
});




// Get SaleItem by ID
router.get('/:id', (req, res) => {
    SaleItem
        .findOne({
            where:{
           user_id : req.params.id
        }})
        .then((saleitem) => {
            if (saleitem == null) {
                SaleItem
                .create({
                    name: '',
                    user_id: req.params.id,
                    content: ''
                })
                .then((saleitem) => res.status(201).send(saleitem))
                .catch((error) => {
                    res.status(400).send(error);
                });
            }else{
               res.status(201).send(saleitem); 
            }
        })
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a Menu Items
router.put('/:id', function (req, res) {
        if (!req.params.id || !req.body.content) {
            res.status(400).send({
                msg: 'Please pass Slet Item ID, description.'
            })
        } else {
            SaleItem
                .findByPk(req.params.id)
                .then((saleitem) => {
                    SaleItem.update({
                        user_id: req.body.user_id || saleitem.user_id,
                        content: req.body.content || saleitem.content
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Sales Item updated'
                        });
                    }).catch(err => res.status(400).send(err));
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
});



module.exports = router;
