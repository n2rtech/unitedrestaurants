const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Vendor = require('../models').Vendor;
const VendorUks = require('../models').VendorUks;
const Country = require('../models').Country;
const Permission = require('../models').Permission;
const Category = require('../models').Category;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();
const path = require('path');
const Op = require('sequelize').Op
var multer  = require('multer');
const {DB} = require('../config/database');
const db = require('../models');

const app = express();
app.db = (model) => db[model];

const imageStorage = multer.diskStorage({
    destination: 'uploads/categories', 
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
        if (!req.body.name || !req.body.description) {
            res.status(400).send({
                msg: 'Please pass Category name or description.'
            })
        } else {
            var slug = req.body.name
             .toLowerCase()
             .replace(/ /g, '-')
             .replace(/[^\w-]+/g, '');

             if (req.file) {
                image = req.file.filename;
             }else{
                image = '';
             }

             if(req.body.parent_id == '') {
                 parent_id = 0;
             } else {
                parent_id = req.body.parent_id;
             }

             console.log('Parent Id',parent_id);

            Category
                .create({
                    name: req.body.name,
                    description: req.body.description,
                    slug: slug,
                    image: image,
                    parent_id: parent_id,
                    sort_order: req.body.sort_order,
                    status: req.body.status,
                    top_menu: req.body.top_menu
                })
                .then((category) => res.status(201).send(category))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send('error');
                });
        }
});



// Get List of Categories
router.get('/', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
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
});





// Get List of Categories
router.get('/get', passport.authenticate('jwt', {
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

// Get List of Categories
router.get("/list", (req, res) => {
    Category
    .findAll({
        where: {
          parent_id: 0
      }
  })
    .then((category) => {

        /* Object.entries(category).forEach(([key, value]) => {
        Object.assign(category[key], {sub: 'kkkkkkkk'});
        console.log('inloop',category[key].sub);
        {where:
    {parent_id: 0},
    include: [{
        model: Category,
                as: 'sub_category'
    }]
}*/


        res.status(200).send(category)
    })
    .catch((error) => {
        res.status(400).send(error);
    });
});

router.get('/catlist', function (req, res) {
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

            ]

        })
            .then((category) => {

                var newdata = [];
             
                newdata = category.forEach((element,i) => {
                    
                    category[i].parent_1  = category[i].parent_2 = category[i].parent_3 = category[i].parent_4 = '';
                    category[i].parentid_1 = '';
                  
                      category[i].id = element.id;
                      var parent = element.parent_category; 
                      if(parent){
                        category[i].parent_1 = element.name+' > '+parent.name;
                        category[i].parentid_1 = parent.id;
                        if(parent.parent_category){
                          var nextparent = parent.parent_category; 
                           
                          category[i].parentid_1 = element.name+' > '+parent.name+' > '+nextparent.name;
                          category[i].parentid_1 = nextparent.id;
                          if(nextparent.parent_category){
                            var nextnextparent = nextparent.parent_category;
                            
                            category[i].parentid_1 = element.name+' > '+parent.name+' > '+nextparent.name+' > '+nextnextparent.name;
                            category[i].parentid_1 = nextnextparent.id;
                            if(nextnextparent.parent_category){
                              var nectnextnextparent = nextnextparent.parent_category;
                              
                              category[i].parentid_1 = element.name+' > '+parent.name+' > '+nextparent.name+' > '+nextnextparent.name+' > '+nectnextnextparent.name;
                              category[i].parentid_1 = nectnextnextparent.id;  
                            }
          
                          }
          
                        }

                        category[i].name = category[i].parent_1 +' '+category[i].parent_2+' '+category[i].parent_3+''+category[i].parent_4;
                        category[i].id = category[i].parentid_1;
                      }     
                })

                   
                res.status(200).send(category)
            })
            .catch((error) => {
                res.status(400).send(console.log(error));
            });
});

// Get List of Categories
router.get("/deleted", (req, res) => {
    Category
    .findAll( { where: {deletedAt: {[Op.ne]: null} 
},
    paranoid:false
     })
    .then((category) => {
        res.status(200).send(category)
    })
    .catch((error) => {
        console.log(error)
        res.status(400).send('error');
    });
});


// Get List of Categories
router.get("/top-menu", (req, res) => {
    Category
    .findAll({
        where: {
          top_menu: 1,
          status: 1
      }
  })
    .then((category) => {
        res.status(200).send(category)
    })
    .catch((error) => {
        res.status(400).send(error);
    });
});

router.get("/subcat/:id", (req, res) => {
    Category
    .findAll({
        where: {
          parent_id: req.params.id
      }
  })
    .then((category) => {

        res.status(200).send(category)
    })
    .catch((error) => {
        res.status(400).send(error);
    });
});

router.get("/all", (req, res) => {
    Category
    .findAll()
    .then((category) => {
        res.status(200).send(category)
    })
    .catch((error) => {
        res.status(400).send(error);
    });
});

// Get Category by ID
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

// Update a Category
router.put('/:id', passport.authenticate('jwt', {
    session: false
}), imageUpload.single('image'), function (req, res) {
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
                        parent_id: req.body.parent_id,
                        status: req.body.status,
                        top_menu: req.body.top_menu,
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
});

// Delete a Category
router.delete('/:id', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
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
});

// Add Permissions to Category
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

const getSubCat = (value) => {
    return new Promise((reject,resolve)=>{
        Category.findAll({ where: { parent_id: value } })
        .then((err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result);
            }
        });
    });
}

const subcat_name = (value) => {
        Category.findOne({ where: { id: value } })
        .then((result,err)=>{
            if(result){
                console.log(result.name);
                return result.name;
            }else{
                return err;
            }
        });
}

router.post("/getByIds", (req, res) => {
    Category
    .findAll({
        include: [
            {
                model: Category,
                as: 'parent_category',
            }
        ], 
      where: {
        id: {
          [Op.in]: req.body.categories
      }
  }
})
    .then((category) => {

        category.forEach((element,i) => {
            category[i].parentid_1 = ''
            var parent = element.parent_category; 
            if(parent) {
             
                category[i].name = element.name + ' > ' + parent.name;
                
            }
        });
        res.status(201).send(category)
    })
    .catch((error) => {
        res.status(400).send('error');
    });
});


router.get('/get/:id', (req, res) => {
    Category
        .findByPk(req.params.id)
        .then((category) => {
            if (category == null) {
                res.status(200).send('not found')
            }
            res.status(200).send([category])
        })
});


router.get('/getrestaurants/:id', (req, res) => {

    var filter = req.query.filter;
    var country_code = req.query.country;
    const { page, size } = req.query;
    
    const { limit, offset } = getPagination(page, size);

console.log('country',country_code);

    Country.findOne({where:{
        code : country_code||'usa'
    }})
    .then((country,err)=>{
        if(country){


            if (filter && country_code) {
                var conditions = {
                    limit,
                    offset,
                    where:{
                        category_id: req.params.id,
                        country_id: country.id,
                        name: {
                            [Op.like]: req.query.filter ? '%'+req.query.filter+'%' : ''
                        }
                    },
                    order: [ [ 'createdAt', 'DESC' ]]
                }
            }else if (filter && !country_code) {
                var conditions = {
                    limit,
                    offset,
                    where:{
                        category_id: req.params.id,
                        name: {
                            [Op.like]: req.query.filter ? '%'+req.query.filter+'%' : ''
                        }
                    },
                    order: [ [ 'createdAt', 'DESC' ]]
                }
            }else if (country_code && !filter) {
                var conditions = {
                    limit,
                    offset,
                    where:{
                        category_id: req.params.id,
                        country_id: country.id,
                    },
                    order: [ [ 'createdAt', 'DESC' ]]
                }
            }
            else{
                var conditions = {
                    limit,
                    offset,
                    where:{
                        category_id: req.params.id,
                    },
                    order: [ [ 'createdAt', 'DESC' ]]
                }
            }
            console.log('country',country);
            console.log('country code',country_code);
            console.log(conditions);

            Vendor.findAndCountAll(conditions)
            .then((result,err)=>{
                if(result){                

                    const response = getPagingData(result, page, limit);

                    res.status(201).send(response);
                }else{
                    res.status(400).send(err);
                }
            });

            const response = getPagingData(result, page, limit);

            res.status(201).send(response);
        }else{
            res.status(400).send(err);
        }
    });
});


router.get('/getrest/:category', (req, res) => {
    if (!req.params.category) {
      res.status(400).send({
        msg: 'Please pass Category.'
      })
    } else {
      code = req.query.country||'usa';
      const { page, size } = req.query;
      const { limit, offset } = getPagination(page, size);
      if (code == 'ita') {
        var table_name = 'VendorIta';
      }else{
        var codee = code.charAt(0).toUpperCase() + code.slice(1);
        var table_name = 'Vendor' + codee + 's';
      }
      Category
      .findOne({
        where :{ id : req.params.category}
      })
      .then((category) => {
          
        if (category == null) {
          res.status(200).send('category not found')
        }else{
          var code = req.query.country||'usa';
          if (code == 'ita') {
            var table_name = 'VendorIta';
          }else{
            var codee = code.charAt(0).toUpperCase() + code.slice(1);
            var table_name = 'Vendor' + codee;
          }

        
          if (table_name == 'Null') {
            var table_name = 'VendorIta';
          }
          if (req.query.filter) {
            condition = {
              where:{
                categories: { [Op.like]: '%' + category.id + '%' },
                business_name: { [Op.like]: '%' + req.query.filter + '%' }
              },
              offset,
              limit
            }
          }else{
            condition = {
              where:{
                categories: { [Op.like]: '%' + category.id + '%' }
              },
              offset,
              limit
            }
          }

         
          app.db(table_name)
          .findAndCountAll(condition)
          .then(vendors => {
           const response = getPagingData(vendors, page, limit);
           res.status(200).send(response)
         })
          .catch((error) => {
            console.log(error);
            res.status(400).send('error2');
          });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
    }
  });

// Restore a Country
router.post('/restore', (req, res) => {
    Category.restore()
    .then(_ => {
        res.status(200).send({
            'message': 'Country restored'
        });
    }).catch(err => res.status(400).send(err));
});


const getPagination = (page=1, size) => {
  const limit = size ? +size : 3;
  const offset =  (page-1) * limit;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: vendors } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, vendors, totalPages, currentPage };
};

module.exports = router;
