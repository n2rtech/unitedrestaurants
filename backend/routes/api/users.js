const express = require("express");
const router = express.Router();
const {DB} = require('../../config/database');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const nodemailer = require("nodemailer");
const User = require('../../models').User;
const Role = require('../../models').Role;

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");


router.post("/register", (req, res) => {
  const {errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }


  DB.query('SELECT email FROM users WHERE email ="' + req.body.email +'"', function (err, user) {
    if (err) throw err;
    if (user[0]) {
      return res.status(400).json({ error: "Email already exists" });
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;         
          var name = req.body.first_name+' '+req.body.last_name;


          Role.findOne({
            where: {
                role_name: req.body.role? req.body.role : 'vendor'
            }
        }).then((role) => {
            User
            .create({
                email: req.body.email,
                password: hash,
                name: name,
                mobile: req.body.phone,
                phone: req.body.phone,
                address: req.body.address,
                role_id: role.id
            })
            .then((user) => res.status(201).send({
              succeed: true,
              message: "user inserted successfully!"
            }));               
        })
      });     
    });
  }
});
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }


  const email = req.body.email;
  const password = req.body.password;

  let sql = "SELECT * FROM users where email = '"+email+"'";
  DB.query(sql,(err,user)=>{
    if(err){
      return res.status(404).json({ error: "Error in sql!" });   
    }else if (!user[0]) {
      return res.status(404).json({ error: "Email or Password not found" });
    }else {
      console.log(user[0]);
      bcrypt.compare(password, user[0].password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user[0].id,
            name: user[0].name,
            email: user[0].email,
            role:user[0].role
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

module.exports = router;
  