const request = require('request');

request({
	url:"https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lobard%20street%20philadeplphia",
	json: true
}, (error, response, body)=>{
	console.log(`Address: ${body.results[0].formatted_address}`);
	console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
	console.log(`Longtitude: ${body.results[0].geometry.location.lng}`);
});