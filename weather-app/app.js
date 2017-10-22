// const yargs = require('yargs');
// const geocode = require('./geocode/geocode.js');
const constants = require('./config/constants.js');
const request = require('request');

// const argv = yargs
// 	.options({
// 		a: {
// 			demand: true,
// 			alias: 'address',
// 			describe: 'Address to fetch weather for',
// 			string: true
// 		}
// 	})
// 	.help()
// 	.alias('help', 'h')
// 	.argv;

// geocode.geocodeAddress(
// 	argv.address,
// 	(errorMessage,results)=>{
// 		if(errorMessage){	
// 			console.log(errorMessage);
// 		}else{
// 			console.log(JSON.stringify(results,undefined, 2));
// 		}
// 	}
// );

request({
		url:`https://api.darksky.net/forecast/${constants.DARK_SKY_API_KEY}/37.8267,-122.4233`,
		json: true
	}, (error, response, body)=>{
		if(!error&&response.statusCode===200){
			console.log(body.currently.summary);
			console.log(body.currently.temperature);
		}else{
			console.log("Unable to retrieve weather information.");
		}
	}
);
