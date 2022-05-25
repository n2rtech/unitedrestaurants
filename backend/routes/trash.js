const express = require('express');
const router = express.Router();
const Role = require('../models').Role;
const Vendor = require('../models').Vendor;
const User = require('../models').User;
const Trash = require('../models').Trash;
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

let maxTotalPage = 0;
let maxTotalItems = 0;
let maxCurrentPage = 0;


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


function catLists(getData,tableName,type) {
    for (let data of getData) {
        Trash
          .create({
            user_id: data.user_id,
            name: data.name,
            table_name: tableName,
            table_id: data.id,
            type: type
          })
    }
    return true;
}

router.get('/get-all/pagination', async (req, res) => {
  Trash.truncate();
  Vendor
  .findAll({ 
    where: {deletedAt: {[Op.ne]: null}},
    paranoid:false
  })
  .then((vendors) => {

    let CatList = catLists(vendors,'Vendor','vendor');
    User
    .findAll({ 
      where: {deletedAt: {[Op.ne]: null}},
      paranoid:false
    })
    .then((users) => {

      let CatList = catLists(users,'User','user');

      Category
      .findAll( {
        where: {deletedAt: {[Op.ne]: null} },
        paranoid:false
      })
      .then((categories) => {

        let CatList = catLists(categories,'Category','category');

        Country
        .findAll( { where: {deletedAt: {[Op.ne]: null} 
      },
      paranoid:false
    })
        .then((countries) => {

          let CatList = catLists(countries,'Country','country');

          AccountsPayable
          .findAll({ 
            where: {deletedAt: {[Op.ne]: null}},
            paranoid:false
          })
          .then((accountspayables) => {

            let CatList = catLists(accountspayables,'Accounts Payable','accountsPayable');

            Blog
            .findAll({ 
              where: {deletedAt: {[Op.ne]: null}},
              paranoid:false
            })
            .then((blogs) => {

              let CatList = catLists(blogs,'Blog ','blog');
              ContactInquiry
            .findAll({ 
              where: {deletedAt: {[Op.ne]: null}},
              paranoid:false
            })
            .then((contactinquiry) => {

              let CatList = catLists(contactinquiry,'Contact Enquiry','ContactInquiry');


            ContactInquiry
            .findAll({ 
              where: {deletedAt: {[Op.ne]: null}},
              paranoid:false
            })
            .then((contactinquiry) => {

              const { page, size } = req.query;
              const { limit, offset } = getPagination(page, size);

              Trash.findAndCountAll({limit,offset})
              .then((vendors) => {
              res.status(200).send(getPagingVendorsData(vendors, page, limit));
                });
            })
            .catch((error) => {
              console.log('error',error);
              res.status(400).send('error');
            });

            })
            .catch((error) => {
              console.log('error',error);
              res.status(400).send('error');
            });
            })
            .catch((error) => {
              console.log('error',error);
              res.status(400).send('error');
            });
          })
          .catch((error) => {
            console.log('error',error);
            res.status(400).send('error');
          });
        })
        .catch((error) => {
          console.log('error',error);
          res.status(400).send('error');
        });
      })
      .catch((error) => {
        console.log('error',error);
        res.status(400).send('error');
      });

    })
    .catch((error) => {
      console.log('error',error);
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
    console.log(table_name);
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


router.get('/all/with-paginate', (req, res) => {

  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  Vendor
  .findAndCountAll({
    where: {deletedAt: {[Op.ne]: null}},
    paranoid:false,
    offset,
    limit,
    order: [ [ 'createdAt', 'DESC' ]]
  })
  .then((vendors) => {
    User
    .findAndCountAll({
      where: {deletedAt: {[Op.ne]: null}},
      paranoid:false,
      offset,
      limit,
      order: [ [ 'createdAt', 'DESC' ]]
    })
    .then((users) => {
      Category
      .findAndCountAll( {
        where: {deletedAt: {[Op.ne]: null} },
        paranoid:false,
        offset,
        limit,
        order: [ [ 'createdAt', 'DESC' ]]
      })
      .then((categories) => {
        Country
        .findAndCountAll( { 
          where: {deletedAt: {[Op.ne]: null} ,
        },
        paranoid:false,
        offset,
        limit,
        order: [ [ 'createdAt', 'DESC' ]]
      })
        .then((countries) => {
          AccountsPayable
          .findAndCountAll({ 
            where: {deletedAt: {[Op.ne]: null}},
            paranoid:false,
            offset,
            limit,
            order: [ [ 'createdAt', 'DESC' ]]
          })
          .then((accountspayables) => {
            Blog
            .findAndCountAll({ 
              where: {deletedAt: {[Op.ne]: null}},
              paranoid:false,
              offset,
              limit,
              order: [ [ 'createdAt', 'DESC' ]]
            })
            .then((blogs) => {
              ContactInquiry
              .findAndCountAll({ 
                where: {deletedAt: {[Op.ne]: null}},
                paranoid:false,
                offset,
                limit,
                order: [ [ 'createdAt', 'DESC' ]]
              })
              .then((contactinquiry) => {
                var data = {
                  vendors : getPagingVendorsData(vendors, page, limit),
                  users : getPagingUsersData(users, page, limit),
                  country : getPagingCountriesData(countries, page, limit),
                  categories : getPagingCategoriesData(categories, page, limit),
                  blogs : getPagingBlogsData(blogs, page, limit),
                  accountpayables : getPagingAccountspayablesData(accountspayables, page, limit),
                  contactinquiry : getPagingContactinquiryData(contactinquiry, page, limit),
                  totalPage: maxTotalPage||0,
                  totalItems : maxTotalItems||0,
                  currentPage : parseInt(page)
                }
                res.status(200).send(data)
              })
              .catch((error) => {
                console.log(error);
                res.status(400).send('error');
              });
            })
            .catch((error) => {
              console.log(error);
              res.status(400).send('error');
            });
          })
          .catch((error) => {
            console.log(error);
            res.status(400).send('error');
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(400).send('error');
        });
      })
      .catch((error) => {
        console.log(error);
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


const getPagination = (page=1, size) => {
      const limit = size ? +size : 3;
      const offset =  (page-1) * limit;

      return { limit, offset };
  };

  const getPagingVendorsData = (data, page, limit) => {
      const { count: totalItems, rows: vendors } = data;
      const currentPage = page ? +page : 1;
      const totalPages = Math.ceil(totalItems / limit);

      if(maxTotalPage < totalPages) {
        maxTotalPage = totalPages;
      }

      if(maxTotalItems < totalItems) {
        maxTotalItems = totalItems;
      }

      if(maxCurrentPage < currentPage) {
        maxCurrentPage = currentPage;
      }

      return { totalItems, vendors, totalPages, currentPage };
  };


  const getPagingUsersData = (data, page, limit) => {
      const { count: totalItems, rows: users } = data;
      const currentPage = page ? +page : 1;
      const totalPages = Math.ceil(totalItems / limit);

      

      if(maxTotalItems < totalItems) {
        maxTotalItems = totalItems;
      }

      

      return { totalItems, users, totalPages, currentPage };
  };



  const getPagingCountriesData = (data, page, limit) => {
      const { count: totalItems, rows: countries } = data;
      const currentPage = page ? +page : 1;
      const totalPages = Math.ceil(totalItems / limit);

      

      if(maxTotalItems < totalItems) {
        maxTotalItems = totalItems;
      }

      

      return { totalItems, countries, totalPages, currentPage };
  };


 const getPagingCategoriesData = (data, page, limit) => {
      const { count: totalItems, rows: categories } = data;
      const currentPage = page ? +page : 1;
      const totalPages = Math.ceil(totalItems / limit);
        console.log('maxTotalPage',maxTotalPage,'totalPages',totalPages);
      

      if(maxTotalItems < totalItems) {
        maxTotalItems = totalItems;
      }

      

      return { totalItems, categories, totalPages, currentPage };
  };

  const getPagingBlogsData = (data, page, limit) => {
      const { count: totalItems, rows: blogs } = data;
      const currentPage = page ? +page : 1;
      const totalPages = Math.ceil(totalItems / limit);

      

      if(maxTotalItems < totalItems) {
        maxTotalItems = totalItems;
      }

      

      return { totalItems, blogs, totalPages, currentPage };
  };

  const getPagingAccountspayablesData = (data, page, limit) => {
      const { count: totalItems, rows: accountspayables } = data;
      const currentPage = page ? +page : 1;
      const totalPages = Math.ceil(totalItems / limit);

      

      if(maxTotalItems < totalItems) {
        maxTotalItems = totalItems;
      }

      

      return { totalItems, accountspayables, totalPages, currentPage };
  };

  const getPagingContactinquiryData = (data, page, limit) => {
      const { count: totalItems, rows: contactenquries } = data;
      const currentPage = page ? +page : 1;
      const totalPages = Math.ceil(totalItems / limit);

      

      if(maxTotalItems < totalItems) {
        maxTotalItems = totalItems;
      }

      

      return { totalItems, contactenquries, totalPages, currentPage };
  };

module.exports = router;