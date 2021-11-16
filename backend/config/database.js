'use strict';
const mysql = require('mysql');
const connection = mysql.createConnection({
						host     : 'localhost',
						user     : 'root',
						pasword : '',
						port     : '3306',
						database : 'united-restaurants',
						charset: "utf8mb4_unicode_ci",
						pool	   : true  
					});

connection.connect(function(error) {
	if(!!error){
		console.log(error);
	  }else{
		console.log('Connected!:)');
	  }
});
//
module.exports={DB:connection};
