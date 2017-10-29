const express = require('express');

var app = express();

app.use(express.static(__dirname+"/public"));

app.get('/',(req, res)=>{
	res.send({
		name: "Zan Lozart Vazinki",
		bio:{
			height:123,
			age:32
		}
	});
});

app.get('/about',(req, res)=>{
	res.send("about me");
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