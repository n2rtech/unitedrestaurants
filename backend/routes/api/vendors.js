const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize');
const {DB} = require('../../config/database');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const nodemailer = require("nodemailer");
const User = require('../../models').User;
const db = require('../../models');
const Vendor = require('../../models').Vendor;
const Membership = require('../../models').Membership;
const MembershipTransaction = require('../../models').MembershipTransaction;
const HotDeal = require('../../models').HotDeal;
const FeaturedBusiness = require('../../models').FeaturedBusiness;
const BusinessAdvertise = require('../../models').BusinessAdvertise;
const Role = require('../../models').Role;
const Category = require('../../models').Category;
const Country = require('../../models').Country;
const passport = require('passport');
require('../../config/vendor_passport')(passport);
const Helper = require('../../utils/helper');
const helper = new Helper();
const Op = require('sequelize').Op

const app = express();
app.db = (model) => db[model];

const path = require('path');
var multer  = require('multer');
var fs = require('fs');

const imageStorage = multer.diskStorage({
    destination: 'uploads/banner', 
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


const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");


router.post("/register", (req, res) => {
  const {errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  var table_name  = 'vendors'.charAt(0).toUpperCase() + 'vendors'.slice(1);
  DB.query('SELECT email FROM '+table_name+' WHERE email ="' + req.body.email +'"', function (err, user) {
    if (err) throw err;
    if (user[0]) {
      return res.status(400).json({ error: "Email already exists" });
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;         
          var name = req.body.name;      
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
          .then((user) => {

            var table_name  = 'countries'.charAt(0).toUpperCase() + 'countries'.slice(1);
            DB.query('SELECT code FROM '+table_name+' WHERE id ="' + req.body.country_id +'"', function (err, country) {
              if (err) throw err;
              if (country[0]) {
                var code = country[0].code;

                if (code == 'ita') {
                  var table_name = 'VendorIta';
                }else{
                  var codee = code.charAt(0).toUpperCase() + code.slice(1);
                  var table_name = 'Vendor' + codee + 's';
                }

                var user_id = user.id;
                var email = req.body.email;
                var name = req.body.name;
                var address = req.body.address;
                var mobile = req.body.mobile;

                DB.query("INSERT INTO " + table_name +" (user_id, `business_name`, `about_business`, `business_email`, `manager_name`, `manager_email`, `owner_name`, `owner_email`, `phone`, `mobile`, `fax`, `address`, `city`, `state`, `post_code`, `latitude`, `longitude`, `categories`, `banner`, `website_link`, `facebook`, `instagram`, `youtube`, `gallery`, `video`, `status`, `deletedAt`, `createdAt`, `updatedAt`) VALUES ("+user_id+", '"+name+"', NULL, '"+email+"', '"+name+"', '"+email+"', '"+name+"', '"+email+"', '"+mobile+"', '"+mobile+"', NULL, '"+address+"', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NOW(), '')");
                res.status(201).send({
                  succeed: true,
                  message: "vendor created successfully!"
                })

              } else {
                res.status(200).send({
                  succeed: false,
                  message: "vendor creation error!"
                })
              }
            });
          }).catch((error) => {
            res.status(400).send(error);
          });              
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
  var table_name  = 'vendors'.charAt(0).toUpperCase() + 'vendors'.slice(1);
  let sql = "SELECT * FROM "+table_name+" where email = '"+email+"'";
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


// Get new Vendors
router.get('/new', (req, res) => {

  Vendor.findAll({
    limit:2
  })
  .then((vendors) => {          
    if (vendors) {
      if (req.query.search == 'today') {
        const TODAY_START = new Date().setHours(0, 0, 0, 0);
        const NOW = new Date();
        var conditions = {
          where: {
            createdAt: {
              [Op.gt]: TODAY_START,
              [Op.lt]: NOW
            },
          },
          limit:5,
          order: [
            ['createdAt', 'DESC'],
            ]
        }

      }else{
        var conditions = {
          limit:5,
          order: [
            ['createdAt', 'DESC'],
            ]
        };
      }

      Vendor.findAll(conditions)
      .then(users => {
       res.status(200).send(users)
     })
      .catch(err => res.status(400).send(err));
    } else {
      res.status(404).send({
        'message': 'Vendors not found'
      });
    }
  })
  .catch((error) => {
    res.status(400).send(error);
  });
});


// Get Vendors
router.get('/', (req, res) => {

  Vendor.findAll()
  .then((roles) => {          
    if (roles) {
      if (req.query.name || req.query.email || req.query.mobile || req.query.country) {
      var conditions = {
        where: {

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
      };
      }

      Vendor.findAll(conditions)
      .then(users => {
       res.status(200).send(users)
     })
      .catch(err => res.status(400).send(err));
    } else {
      res.status(404).send({
        'message': 'Vendors not found'
      });
    }
  })
  .catch((error) => {
    res.status(400).send(error);
  });
});



// Get Vendors
router.get('/:key', (req, res) => {

  if (req.params.key == "membership") {
    var conditions = {
      where: {
        membership_id: {
          [Op.ne]: null
        }
      }
    };
  }


  else if (req.params.key == "no-membership") {
    var conditions = {
      where: {
        membership_id: {
          [Op.eq]: null
        }
      }
    };
  }


  else if (req.params.key == "suspended") {
    var conditions = {
      where: {
        is_suspended: {
          [Op.eq]: 1
        }
      }
    };
  }


  else if (req.params.key == "featured") {
    var conditions = {  include: {
      model: FeaturedBusiness,
      as: 'featured',
      required: true
    }};
  }


  else if (req.params.key == "hot-deals") {
    var conditions = {  include: {
      model: HotDeal,
      as: 'hot_deals',
      required: true
    }};
  }


  else if (req.params.key == "add-space") {
    var conditions = {
      where: {
        adds_membership_id: {
          [Op.ne]: null
        }
      }
    };
  }

  else if (req.params.key == "video-membership") {
    var conditions = {
      where: {
        video_membership_id: {
          [Op.ne]: null
        }
      }
    };
  }
  else{

    var conditions = { 
      where:{
        id: req.params.key
      }
    };
  }

  Vendor.findAll(conditions)
  .then((vendors) => {          
    if (vendors) {
      res.status(200).send(vendors)
    } else {
      res.status(404).send({
        'message': 'Vendors not found',
        'data' : []
      });
    }
  })
  .catch((error) => {
    res.status(400).send(error);
  });
});



// Get Vendors
router.get('/count/:key', (req, res) => {

  if (req.params.key == "membership") {
    var conditions = {
      where: {
        membership_id: {
          [Op.ne]: null
        }
      }
    };
  }


  else if (req.params.key == "no-membership") {
    var conditions = {
      where: {
        membership_id: {
          [Op.eq]: null
        }
      }
    };
  }


  else if (req.params.key == "suspended") {
    var conditions = {
      where: {
        is_suspended: {
          [Op.eq]: 1
        }
      }
    };
  }


  else if (req.params.key == "featured") {
    var conditions = {  include: {
      model: FeaturedBusiness,
      as: 'featured',
      required: true
    }};
  }


  else if (req.params.key == "hot-deals") {
    var conditions = {  include: {
      model: HotDeal,
      as: 'hot_deals',
      required: true
    }};
  }


  else if (req.params.key == "add-space") {
    var conditions = {
      where: {
        adds_membership_id: {
          [Op.ne]: null
        }
      }
    };
  }

  else if (req.params.key == "video-membership") {
    var conditions = {
      where: {
        video_membership_id: {
          [Op.ne]: null
        }
      }
    };
  }
  else{

    var conditions = {
    };
  }

  Vendor.count(conditions)
  .then((vendors) => {          
    if (vendors) {
      console.log(vendors);
      res.status(200).send({count:vendors})
    } else {
      res.status(404).send({
        'message': 'Vendors not found',
        'data' : []
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
router.put('/:id', (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.mobile) {
    res.status(400).send({
      msg: 'Please pass Role ID, email, password, phone or fullname.'
    })
  } else {
    Vendor
    .findByPk(req.params.id)
    .then((user) => {

      console.log('Data Coming' , req.body);

      Vendor.update({
        email: req.body.email || user.email,
        name: req.body.name || user.name,
        phone: req.body.mobile || user.phone,
        mobile: req.body.mobile || user.mobile,
        country_id: req.body.country_id || user.country_id,
        category_id: req.body.category_id || user.category_id,
        address: req.body.address || user.address,
        featured_business: req.body.featured_business || user.featured_business,
        hot_deal: req.body.hot_deals || user.hot_deal,
        business_dvertise: req.body.business_dvertise || user.business_dvertise,
      }, {
        where: {
          id: req.params.id
        }
      }).then(_ => {

        var table_name = 'countries'.charAt(0).toUpperCase() + 'countries'.slice(1);
        DB.query('SELECT code,name FROM '+table_name+' WHERE id ="' + user.country_id +'"', function (err, country) {
          if (err) throw err;
          if (country[0]) {
            var code = country[0].code;
            var country = country[0].code;

            if (code == 'ita') {
              var table_name = 'VendorIta';
            }else{
              var codee = code.charAt(0).toUpperCase() + code.slice(1);
              var table_name = 'Vendor' + codee + 's';
            }

            DB.query('SELECT * FROM '+table_name+' WHERE user_id ="' + user.id +'"', function (err, vendor_pro) {
              if (err) throw err;
              if (vendor_pro[0]) {

                var user_id = user.id;
                var country_id = user.country_id;
                var name = req.body.name;
                var banner = vendor_pro[0].banner;

                DB.query("DELETE  FROM HotDeals where user_id="+user_id);
                DB.query("DELETE  FROM BusinessAdvertises where user_id="+user_id);
                DB.query("DELETE  FROM FeaturedBusinesses where user_id="+user_id);
                if (req.body.hot_deals) {
                  DB.query("INSERT INTO HotDeals (user_id, `country_id`, `country`, `business_name`, `about_business`, `banner`,`createdAt`, `updatedAt`) VALUES ("+user_id+", '"+country_id+"', '"+country+"', '"+req.body.name+"', '', '"+banner+"', NOW(), '')");
                }

                if (req.body.featured_business){
                  DB.query("INSERT INTO FeaturedBusinesses (user_id, `country_id`, `country`, `business_name`, `about_business`, `banner`,`createdAt`, `updatedAt`) VALUES ("+user_id+", '"+country_id+"', '"+country+"', '"+req.body.name+"', '', '"+banner+"', NOW(), '')");
                }

                if (req.body.hot_deals || req.body.featured_business) {
                  DB.query("INSERT INTO BusinessAdvertises (user_id, `country_id`, `country`, `business_name`, `about_business`, `banner`,`createdAt`, `updatedAt`) VALUES ("+user_id+", '"+country_id+"', '"+country+"', '"+req.body.name+"', '', '"+banner+"', NOW(), '')");
                }

                res.status(200).send({
                  'message': 'User updated'
                });
              }else{
                res.status(200).send({
                  'message': 'User updated2'
                });
              }
            })
          }else{
            res.status(200).send({
              'message': 'User updated3'
            });
          }
        })


      }).catch(err => res.status(400).send(err));
    })
    .catch((error) => {
      res.status(400).send(error);
    });
  }
});




// Get Profile by ID
router.get('/profile/:id', (req, res) => {
  Vendor
  .findByPk(req.params.id)
  .then((vendor) => {
    if (vendor) {
      var tables_name = 'countries'.charAt(0).toUpperCase() + 'countries'.slice(1);
      DB.query('SELECT code FROM '+tables_name+' WHERE id ="' + vendor.country_id +'"', function (err, country) {
        if (err) throw err;
        if (country[0]) {
          var code = country[0].code;

          if (code == 'ita') {
            var table_name = 'VendorIta';
          } else {
            var codee = code.charAt(0).toUpperCase() + code.slice(1);
            var table_name = 'Vendor' + codee + 's';
          }

          DB.query("SELECT * FROM " + table_name +" WHERE user_id =" + vendor.id, function (err, profile) {
            if (err) throw err;
            if (profile[0]) {

              res.status(201).send(profile[0])
            } else {
              var user_id = vendor.id;
              var email = vendor.email;
              var name = vendor.name;
              var address = vendor.address;
              var mobile = vendor.mobile;

              DB.query("INSERT INTO " + table_name +" (user_id, `business_name`, `about_business`, `business_email`, `manager_name`, `manager_email`, `owner_name`, `owner_email`, `phone`, `mobile`, `fax`, `address`, `city`, `state`, `post_code`, `latitude`, `longitude`, `categories`, `banner`, `website_link`, `facebook`, `instagram`, `youtube`, `gallery`, `video`, `status`, `deletedAt`, `createdAt`, `updatedAt`) VALUES ("+user_id+", '"+name+"', NULL, '"+email+"', '"+name+"', '"+email+"', '"+name+"', '"+email+"', '"+mobile+"', '"+mobile+"', NULL, '"+address+"', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NOW(), '')");

              DB.query("SELECT * FROM " + table_name +" WHERE user_id =" + vendor.id, function (err, profile) {
                if (err) throw err;
                if (profile[0]) {

                  res.status(201).send(profile[0])
                }
              });

              /*res.status(201).send({
                succeed: true,
                message: "vendor created successfully!"
              })*/

            }
          });
        }    
      });
    }       
  });
});


// Update a Profile
router.put('/profile/:id', imageUpload.single('banner'), (req, res) => {

  if (!req.params.id || !req.body.business_name || !req.body.business_email) {
    res.status(400).send({
      msg: 'Please pass Profile ID, name or email.'
    })
  } else {
    Vendor
    .findByPk(req.params.id)
    .then((profile) => {

      if (req.file) {
        /*var filePath = path.resolve('./')+'/uploads/banner/'+profile.banner; 
        fs.unlinkSync(filePath);*/
        var image = req.file.filename;
      }else{
        var image = profile.banner;
      }

      var tables_name = 'countries'.charAt(0).toUpperCase() + 'countries'.slice(1);
      DB.query('SELECT code FROM '+tables_name+' WHERE id ="' + profile.country_id +'"', function (err, country) {
        if (err) throw err;
        if (country[0]) {
          var code = country[0].code;

          if (code == 'ita') {
            var table_name = 'VendorIta';
          }else{
            var codee = code.charAt(0).toUpperCase() + code.slice(1);
            var table_name = 'Vendor' + codee ;
          }

          console.log(req.body.categories);
          // return false;

          if (req.body.categories) {
            var categories = req.body.categories;
          }else{
            var categories = profile.categories;
          }

          app.db(table_name)
          .update({
            business_name: req.body.business_name || profile.business_name,
            business_email: req.body.business_email || profile.business_email,
            manager_name: req.body.manager_name || profile.manager_name,
            about_business: req.body.about_business,
            manager_email: req.body.manager_email || profile.manager_email,
            phone: req.body.phone || profile.phone,
            // mobile: req.body.mobile || profile.mobile,
            fax: req.body.fax || profile.fax,
            banner: image,
            address: req.body.address || profile.address,
            categories: categories,
            website_link: req.body.website_link || profile.website_link,
            //media_links: req.body.media_links || profile.media_links,
            facebook: req.body.facebook || profile.facebook,
            instagram: req.body.instagram || profile.instagram,
            youtube: req.body.youtube || profile.youtube,
            // status: req.body.status || profile.status
          }, {
            where: {
              user_id: profile.id
            }
          }).then((dddd) => {

            HotDeal.update({
              business_name : req.body.business_name || profile.business_name,
              about_business : req.body.about_business || profile.about_business,
              categories: categories,
              banner:image,
              country_id : profile.country_id,
              country : code,
            }, {
              where: {
                user_id: profile.id
              }
            }).then((dddd) => {
             FeaturedBusiness.update({
              business_name : req.body.business_name || profile.business_name,
              about_business : req.body.about_business || profile.about_business,
              categories: categories,
              banner:image,
              country_id : profile.country_id,
              country : code,
            }, {
              where: {
                user_id: profile.id
              }
            }).then((dddd) => {
              BusinessAdvertise.update({
                business_name : req.body.business_name || profile.business_name,
                about_business : req.body.about_business || profile.about_business,
                categories: categories,
                banner:image,
                country_id : profile.country_id,
                country : code,
              }, {
                where: {
                  user_id: profile.id
                }
              }).then((dddd) => {
                res.status(200).send({
                  'message': 'Profile updated'
                });
              }).catch(err => res.status(400).send(console.log(err))); 
            }); 
          }); 

          }).catch(err => res.status(400).send(console.log(err)));


        } else {
          res.status(200).send({
            succeed: false,
            message: "vendor creation error!"
          })
        }
      });      
    })
    .catch((error) => {
      res.status(400).send('error');
    });
  }
});


router.get('/active-plan/:id', (req, res) => {
  Vendor
  .findOne({ where:{
    id: req.params.id
  }
})
  .then((vendor) => {
    Membership
    .findOne({ where:{
      id: vendor.membership_id
    }
  })
    .then((membership) => {
    MembershipTransaction
    .findOne({ where:{
      user_id: vendor.id
    },
    order: [ [ 'createdAt', 'DESC' ]],
  })
    .then((transaction) => {
      res.status(200).send({
        'membership': membership,
        'transaction' : transaction
      })
    })
    .catch((error) => {
      res.status(400).send('error');
    });
    })
    .catch((error) => {
      res.status(400).send('error');
    });
  })
  .catch((error) => {
    console.log(error);
    res.status(400).send('error1');
  });
});

// Get Profile by ID
/*router.get('/:id', (req, res) => {
  Vendor
  .findOne({ where:{
    id: req.params.id
  }
})
  .then((vendor) => res.status(200).send(vendor))
  .catch((error) => {
    res.status(400).send(error);
  });
});*/

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
  