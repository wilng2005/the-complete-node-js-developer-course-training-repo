const request = require('request');

request({
	url:"https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lobard%20street%20philadeplphia",
	json: true
}, (error, response, body)=>{
	console.log(JSON.stringify(body, undefined, 2));
});