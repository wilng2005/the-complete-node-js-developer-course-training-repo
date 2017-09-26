console.log('Starting app');

const fs = require('fs');

fs.appendFile('greetings.txt','Hello world', error=>{
	if(error){
		console.log(error);
	}
});
