const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(
	argv.address,
	(errorMessage,results)=>{
		if(errorMessage){	
			console.log(errorMessage);
		}else{
			console.log(results.address);
			// console.log(JSON.stringify(results,undefined,2))
			weather.getWeather(results.latitude,results.longitude,(error,weatherResults)=>{
				if(error){
					console.log(error);
				}else{
					// console.log(JSON.stringify(weatherResults,undefined,2));	
					console.log(`It's ${weatherResults.temperature} but it feels like ${weatherResults.apparentTemperature}.`);
				}
			});
		}
	}
);


