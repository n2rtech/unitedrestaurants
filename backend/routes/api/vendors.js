const express = require("express");
const router = express.Router();
const {DB} = require('../../config/database');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const nodemailer = require("nodemailer");
const User = require('../../models').User;
const Vendor = require('../../models').Vendor;
const Role = require('../../models').Role;
const Category = require('../../models').Category;
const Country = require('../../models').Country;
const passport = require('passport');
require('../../config/vendor_passport')(passport);
const Helper = require('../../utils/helper');
const helper = new Helper();
const Op = require('sequelize').Op

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");


router.post("/register", (req, res) => {
  const {errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }


  DB.query('SELECT email FROM vendors WHERE email ="' + req.body.email +'"', function (err, user) {
    if (err) throw err;
    if (user[0]) {
      return res.status(400).json({ error: "Email already exists" });
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;         
          var name = req.body.first_name+' '+req.body.last_name;      
            Vendor
            .create({
                email: req.body.email,
                password: hash,
                name: name,
                mobile: req.body.mobile,
                address: req.body.address,
                category_id: req.body.category_id,
                country_id: req.body.country_id
            })
            .then((user) => res.status(201).send({
              succeed: true,
              message: "vendor created successfully!"
            }));               
      });     
    });
  }
});
});


router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json({error:errors});
  }


  const email = req.body.email;
  const password = req.body.password;

  let sql = "SELECT * FROM vendors where email = '"+email+"'";
  DB.query(sql,(err,user)=>{
    if(err){
      return res.status(404).json({ error: "Error in sql!" });   
    }else if (!user[0]) {
      return res.status(404).json({ error: "Email or Password not found" });
    }else {
      bcrypt.compare(password, user[0].password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user[0].id,
            name: user[0].name,
            email: user[0].email,
            role:'vendor'
          };

          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 
            },
            (err, token) => {
              res.json({
                success: true,
                token: token
              });
            }
            );
        } else {
          return res
          .status(400)
          .json({ error: "Password incorrect" });
        }
      });
    }
  });
});



// Get Users by Role ID
router.get('/by-role/:id', passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  helper.checkPermission(req.user.role_id, 'role_add').then((rolePerm) => {

  }).catch((error) => {
    res.status(403).send(error);
  });
  Role.findByPk(req.params.id)
  .then((role) => {            
    if (role) {

      const { page, size } = req.query;
          const { limit, offset } = getPagination(page, size);

      if (req.query.name || req.query.email || req.query.mobile || req.query.country) {
      var conditions = {
        offset, 
        limit,
        where: {
          role_id: role.id,

          [Op.or]: [
          {
            name: {
              [Op.like]: req.query.name ? '%'+req.query.name+'%' : ''
            }
          },
          {
            email: {
              [Op.like]: req.query.email ? '%'+req.query.email+'%' : ''
            }
          },
          {
            mobile: {
              [Op.like]: req.query.mobile ? '%'+req.query.mobile+'%' : ''
            }
          },
          {
            country_id: {
              [Op.eq]: req.query.country ? req.query.country : ''
            }
          },
          ]
        }};

      }else{
        var conditions = {
          offset,
          limit,
        where: {
          role_id: role.id
        }
      };
      }

      User.findAndCountAll(conditions)
      .then(users => {
       const response = getPagingData(users, page, limit);
       res.status(200).send(response)
     })
      .catch(err => res.status(400).send(err));
    } else {
      res.status(404).send({
        'message': 'Role not found'
      });
    }
  })
  .catch((error) => {
    res.status(400).send(error);
  });
});


// Get Users by Role ID
router.get('/vendors', passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  helper.checkPermission(req.user.role_id, 'role_add').then((rolePerm) => {

  }).catch((error) => {
    res.status(403).send(error);
  });
  Role.findByPk(2)
  .then((role) => {            
    if (role) {
      if (req.query.name || req.query.email || req.query.mobile || req.query.country) {
      var conditions = {
        where: {
          role_id: role.id,

          [Op.or]: [
          {
            name: {
              [Op.like]: req.query.name ? '%'+req.query.name+'%' : ''
            }
          },
          {
            email: {
              [Op.like]: req.query.email ? '%'+req.query.email+'%' : ''
            }
          },
          {
            mobile: {
              [Op.like]: req.query.mobile ? '%'+req.query.mobile+'%' : ''
            }
          },
          {
            country_id: {
              [Op.eq]: req.query.country ? req.query.country : ''
            }
          },
          ]
        }};

      }else{
        var conditions = {
        where: {
          role_id: role.id
        }
      };
      }

      User.findAll(conditions)
      .then(users => {
       res.status(200).send(users)
     })
      .catch(err => res.status(400).send(err));
    } else {
      res.status(404).send({
        'message': 'Role not found'
      });
    }
  })
  .catch((error) => {
    res.status(400).send(error);
  });
});

router.get('/role/:id', (req, res) => {
  User
  .findByPk(req.params.id)
  .then((user) => { 
    Role
    .findByPk(user.role_id)
    .then((role) => {
      if (role == null) {

        res.status(200).send({
          succeed: false,
          message: "Role not found!"
        })
      }
      res.status(200).send(role)
    })
    .catch((error) => {
      res.status(400).send(error);
    });
  })
  .catch((error) => {
    res.status(400).send(error);
  });
});


// Get User by ID
router.get('/category/:id', (req, res) => {
  User
  .findByPk(req.params.id)
  .then((user) => { 
    Category
    .findByPk(user.category_id)
    .then((category) => {
      if (category == null) {

        res.status(200).send({
          succeed: false,
          message: "Category not found!"
        })
      }
      res.status(200).send(category)
    })
    .catch((error) => {
      res.status(400).send(error);
    });
  })
  .catch((error) => {
    res.status(400).send(error);
  });
});


// Get User by ID
// Get User by ID
router.get('/country/:id', (req, res) => {
  User
  .findByPk(req.params.id)
  .then((user) => { 
    Country
    .findByPk(user.country_id)
    .then((country) => {
      if (country == null) {

        res.status(200).send({
          succeed: false,
          message: "Country not found!"
        })
      }
      res.status(200).send(country)
    })
    .catch((error) => {
      res.status(400).send(error);
    });
  })
  .catch((error) => {
    res.status(400).send(error);
  });
});

// Get User by ID
router.get('/:id', (req, res) => {
  User
  .findByPk(req.params.id)
  .then((user) => res.status(200).send(user))
  .catch((error) => {
    res.status(400).send(error);
  });
});





// Update a User
router.put('/:id', passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  helper.checkPermission(req.user.role_id, 'role_add').then((rolePerm) => {
    if (!req.body.role_id || !req.body.email || !req.body.password || !req.body.fullname || !req.body.phone) {
      res.status(400).send({
        msg: 'Please pass Role ID, email, password, phone or fullname.'
      })
    } else {
      User
        .findByPk(req.params.id)
        .then((user) => {


          if (req.body.password) {
            var password = generatePassword(req.body.password);
          }else{
            var password = user.password;
          }

          User.update({
            email: req.body.email || user.email,
            name: req.body.name || user.name,
            phone: req.body.phone || user.phone,
            mobile: req.body.mobile || user.mobile,
            password: password,
            role_id: req.body.role_id || user.role_id,
            address: req.body.address || user.address,
          }, {
            where: {
              id: req.params.id
            }
          }).then(_ => {
            res.status(200).send({
              'message': 'User updated'
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

const getPagination = (page=1, size) => {
  const limit = size ? +size : 3;
  const offset =  (page-1) * limit;

  return { limit, offset };
};


const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: tutorials } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, tutorials, totalPages, currentPage };
};


function generatePassword(pwd) {
    let hash = bcrypt.hashSync(pwd, 10);
    return hash;
};



module.exports = router;
  