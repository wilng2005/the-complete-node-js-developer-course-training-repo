const request = require('request');

var geocode=(address)=>{
	var encodedAddress = encodeURIComponent(address);

	request({
		url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	}, (error, response, body)=>{
		if(error){
			console.log("Unable to connect to Google server.");
		}else if(body.status==="ZERO_RESULTS"){
			console.log("Unable to find that address.");
		}else if(body.status==="OK"){
			console.log(`Address: ${body.results[0].formatted_address}`);
			console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
			console.log(`Longtitude: ${body.results[0].geometry.location.lng}`);
		}else{
			console.log("Unknown status:"+body.status);
		}

	});
};

module.exports={
	geocode
};