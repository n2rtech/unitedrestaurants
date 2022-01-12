const express = require('express');
const router = express.Router();
const User = require('../models').User;
const SiteSetting = require('../models').SiteSetting;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const passport = require('passport');
require('../config/passport')(passport);
const path = require('path');
var multer  = require('multer');
var mysqldump  = require('mysqldump');
var fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

router.get('/', (req, res) => {
    mysqldump({
        connection: {
            host: config.host,
            user: config.username,
            password: config.password,
            database: config.database,
        },
        dumpToFile: __dirname + '/../uploads/sqlbackup/unitedrestaurants.sql',
        // compressFile: true,
    }).then((_) => res.status(200).send({success:true,message:'backup completed'}))
    .catch((error) => {
        console.log(error);
        res.status(400).send({success:false,message:'error in sql'});
    });
});

router.get('/sqlfilepath', (req, res) => {
res.status(200).send({success:true,message:__dirname + '/../uploads/sqlbackup/unitedrestaurants.sql'})
});


module.exports = router;
