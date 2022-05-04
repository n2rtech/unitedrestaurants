const express = require('express');
const router = express.Router();
const Role = require('../models').Role;
const Vendor = require('../models').Vendor;
const User = require('../models').User;
const Blog = require('../models').Blog;
const ContactInquiry = require('../models').ContactInquiry;
const Category = require('../models').Category;
const AccountsPayable = require('../models').AccountsPayable;
const Country = require('../models').Country;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();
const Op = require('sequelize').Op
const db = require('../models');
const {DB} = require('../config/database');
const app = express();
app.db = (model) => db[model];

// Get List of trash items
router.get('/', (req, res) => {
  Vendor
  .findAll({ 
    where: {deletedAt: {[Op.ne]: null}},
    paranoid:false
  })
  .then((vendors) => {
    User
    .findAll({ 
      where: {deletedAt: {[Op.ne]: null}},
      paranoid:false
    })
    .then((users) => {
      Category
      .findAll( {
        where: {deletedAt: {[Op.ne]: null} },
        paranoid:false
      })
      .then((categories) => {
        Country
        .findAll( { where: {deletedAt: {[Op.ne]: null} 
      },
      paranoid:false
    })
        .then((countries) => {
          AccountsPayable
          .findAll({ 
            where: {deletedAt: {[Op.ne]: null}},
            paranoid:false
          })
          .then((accountspayables) => {
            Blog
            .findAll({ 
              where: {deletedAt: {[Op.ne]: null}},
              paranoid:false
            })
            .then((blogs) => {
              ContactInquiry
            .findAll({ 
              where: {deletedAt: {[Op.ne]: null}},
              paranoid:false
            })
            .then((contactinquiry) => {
              var data = {
                vendors : vendors,
                users : users,
                country : countries,
                categories : categories,
                blogs : blogs,
                accountpayables : accountspayables,
                contactinquiry : contactinquiry
              }
              res.status(200).send(data)
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
            res.status(400).send('error');
          });
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
      res.status(400).send('error');
    });

  })
  .catch((error) => {
    res.status(400).send('error');
  });
});



router.get('/restore/:type/:id', (req, res) => {
  var code = req.params.type;
  var table_name = code.charAt(0).toUpperCase() + code.slice(1);
  console.log(table_name);
  app.db(table_name)
  .restore({ 
    where: {id: req.params.id}
  })
  .then((users) => {
    res.status(200).send(code+ ' restored successfully!')
  })
  .catch((error) => {
    res.status(400).send(error);
  });
});

router.get('/delete/:type/:id', (req, res) => {
  if(req.params.type == 'vendor'){
    Vendor
    .findOne({
      where: { id: req.params.id },
      paranoid: false
    })
    .then((vendor) => {
      Country
      .findByPk(vendor.country_id)
      .then((country) => {
        var code = country.code;
        console.log(code);

        if (code == 'ita') {
          var table_name = 'VendorIta';
        }else{
          var codee = code.charAt(0).toUpperCase() + code.slice(1);
          var table_name = 'Vendor' + codee + 's';
        }

        DB.query("DELETE  FROM "+ table_name +" where user_id="+req.params.id);
        DB.query("DELETE  FROM BusinessAdvertises where user_id="+req.params.id);
        DB.query("DELETE  FROM FeaturedBusinesses where user_id="+req.params.id);
        DB.query("DELETE  FROM HotDeals where user_id="+req.params.id);
        DB.query("DELETE  FROM AdSpaces where user_id="+req.params.id);
        DB.query("DELETE  FROM Galleries where user_id="+req.params.id);
        DB.query("DELETE  FROM JobOpenings where user_id="+req.params.id);
        DB.query("DELETE  FROM MenuItems where user_id="+req.params.id);
        DB.query("DELETE  FROM SaleItems where user_id="+req.params.id);
        DB.query("DELETE  FROM PaymentMethods where user_id="+req.params.id);
        DB.query("DELETE  FROM VideoGalleries where user_id="+req.params.id);
        DB.query("DELETE  FROM VendorCoupons where user_id="+req.params.id);

        var code = req.params.type;
        var table_name = code.charAt(0).toUpperCase() + code.slice(1);
        app.db(table_name)
        .destroy({
          where: {
            id: req.params.id
          },
          force: true
        })
        .then((users) => {
          res.status(200).send(code+ ' deleted successfully!')
        })
        .catch((error) => {
          res.status(400).send('error11');
        });

      })
      .catch((error) => {
        console.log(error);
        res.status(400).send('error3');
      });
    })
    .catch((error) => {
      console.log(error)
      res.status(400).send('error4');
    });
  }
  else{
    var code = req.params.type;
    var table_name = code.charAt(0).toUpperCase() + code.slice(1);
    app.db(table_name)
    .destroy({
      where: {
        id: req.params.id
      },
      force: true
    })
    .then((users) => {
      res.status(200).send(code+ ' deleted successfully!')
    })
    .catch((error) => {
      res.status(400).send('error1');
    });
  }
});







module.exports = router;