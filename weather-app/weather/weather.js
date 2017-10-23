const request = require('request');
const constants = require('./../config/constants.js');
var getWeather= (lat,lng,callback)=>{
	request(
		{
			url:`https://api.darksky.net/forecast/${constants.DARK_SKY_API_KEY}/${lat},${lng}?units=si`,
			json: true
		}, 
		(error, response, body)=>{
			if(!error&&response.statusCode===200){
				callback(undefined,body.currently);
			}else{
				callback("Unable to retrieve weather information.");
			}
		}
	);	
};

module.exports={
	getWeather
};
