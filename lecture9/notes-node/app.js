console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

// console.log(_.isString(true));
// console.log(_.isString('Wil'));

var filteredArray=_.uniq(["Wil","Andrew","Wil",1,1,3,2,35,4]);

console.log(filteredArray);

// var res = notes.add(13,55);
// console.log(res);

// var user = os.userInfo();

// fs.appendFile(
// 	'greetings.txt',
// 	`Hello ${user.username}! You are ${notes.age}.`, 
// 	error=>{
// 		if(error){
// 			console.log(error);
// 		}
// 	}
// );
