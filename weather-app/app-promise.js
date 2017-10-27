const yargs = require('yargs');
const axios = require('axios');
const constants = require('./config/constants.js');
const argv = yargs
	.options({
		a: {
			demand: false,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true,
			default: "Changi South Ave 2"
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

var encodedAddress =encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl)
.then((response)=>{
	if(response.data.status==='ZERO_RESULTS'){
		throw new Error("Unable to find that address");
	}
	console.log(response.data.results[0].formatted_address);
	var weatherUrl=`https://api.darksky.net/forecast/${constants.DARK_SKY_API_KEY}/${response.data.results[0].geometry.location.lat},${response.data.results[0].geometry.location.lng}?units=si`;
	return axios.get(weatherUrl);
}).then((response)=>{
	console.log(`It's ${response.data.currently.temperature} but it feels like ${response.data.currently.apparentTemperature}, with a ${response.data.currently.precipProbability*100}% chance of rain. Sigh.`);
})
.catch((e)=>{
	if(e.code==='ENOTFOUND'){
		console.log("Unable to connect to API server.");
	}else{
		console.log(e.message);	
	}
});
