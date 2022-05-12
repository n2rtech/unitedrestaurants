const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const ContactInquiry = require('../models').ContactInquiry;
const Permission = require('../models').Permission;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();
const Op = require('sequelize').Op

// Create a new ContactInquiry
router.post('/', (req, res) => {

    if (!req.body.name || !req.body.email || !req.body.phone_number || !req.body.message) {
        res.status(400).send({
            msg: 'Please pass Name, Email, Phone Number and Message.'
        })
    } else {
        ContactInquiry
        .create({
            name: req.body.name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            message: req.body.message,
        })
        .then((contact_inquiry) => {
            res.status(201).send({
                succeed : true,
                message : 'Contact Inquiry sended successfully!'
            })
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    }
});

// Get List of ContactInquiry

router.get('/', (req, res) => {

    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    ContactInquiry
    .findAndCountAll({
        order: 
        [
            ['createdAt', 'DESC'],
        ],
        limit,
        offset
    })
    .then((contact_inquiry) => res.status(200).send(getPagingData(contact_inquiry,page,limit)))
    .catch((error) => {
        res.status(400).send(error);
    });
});


// Get List of ContactInquiry
router.get("/deleted", (req, res) => {
    ContactInquiry
    .findAll({
            where: 
            {
                deletedAt: 
                {
                    [Op.ne]: null
                } 
            },
            paranoid:false
        }
    )
    .then((contactinquiry) => {
        res.status(200).send(contactinquiry)
    })
    .catch((error) => {
        res.status(400).send('error');
    });
});

// Get ContactInquiry by ID
router.get('/:id', (req, res) => {
    ContactInquiry
    .findByPk(
        req.params.id
        )
    .then((contactinquiry) => {
        if (contactinquiry == null) {
         res.status(200).send({
            'status':false,
            'message':'Not found'
        }) 
     }
     res.status(200).send(contactinquiry)
 })
    .catch((error) => {
        res.status(400).send(error);
    });
});

// Delete a ContactInquiry
router.delete('/:id', (req, res) => {
    if (!req.params.id) {
        res.status(400).send({
            msg: 'Please pass ContactInquiry ID.'
        })
    } else {
        ContactInquiry
        .findByPk(req.params.id)
        .then((contactinquiry) => {
            if (contactinquiry) {
                ContactInquiry.destroy({
                    where: {
                        id: req.params.id
                    }
                }).then(_ => {
                    res.status(200).send({
                        'message': 'Contact Inquiry deleted'
                    });
                }).catch(err => res.status(400).send(err));
            } else {
                res.status(404).send({
                    'message': 'Contact Inquiry not found'
                });
            }
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    }
});

// Restore a ContactInquiry
router.post('/restore', (req, res) => {
    ContactInquiry.restore()
    .then(_ => {
        res.status(200).send({
            'message': 'Contact Inquiry restored'
        });
    }).catch(err => res.status(400).send(err));
});


const getPagination = (page=1, size) => {
      const limit = size ? +size : 3;
      const offset =  (page-1) * limit;

      return { limit, offset };
  };


  const getPagingData = (data, page, limit) => {
      const { count: totalItems, rows: contactenquries } = data;
      const currentPage = page ? +page : 1;
      const totalPages = Math.ceil(totalItems / limit);
      return { totalItems, contactenquries, totalPages, currentPage };
  };


module.exports = router;
