const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

app.use((req,res,next)=>{
	// console.log(req);
	var logMessage=new Date().toString()+":"+req.method+" on route "+req.url;
	console.log(logMessage);
	fs.appendFile("server.log",logMessage+"\n",(error)=>{if(error){console.log(error);}});
	next();
});

app.use((req,res,next)=>{
	res.render('maintenance.hbs',{
		pageTitle:"Website is down!",
		welcomeMessage: "Sorry, but we're busy fixing something."
	});
});

app.use(express.static(__dirname+"/public"));

hbs.registerHelper('getCurrentYear', ()=>{
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
	return text.toUpperCase();
})

app.get('/',(req, res)=>{
	res.render('home.hbs',{
		pageTitle:"Home page",
		welcomeMessage: "Welcome home!"
	});
});

app.get('/about',(req, res)=>{
	res.render('about.hbs',{
		pageTitle:"About page"
	});
});

app.get('/bad',(req,res)=>{
	res.send({
		errorMessage:"An error has occurred. Again."
	});
});

// app.disable('etag');

app.listen(3000,()=>{
	console.log("Server is up and running on port 3000.");
});