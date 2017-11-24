const express = require('express');

let app = express();
let port = 3000;

app.get('/',(req, res)=>{
	res.status(404).send({
		error:'Page not found.',
		name: 'Todo App v1.0'
	});
});

app.get('/users',(req, res)=>{
	res.status(200).send([
		{
			name: 'Wil',
			age: 12	
		},
		{
			name: 'Joy',
			age: 33	
		}
		]);
});

app.listen(3000,()=>{
	console.log(`Server is running on port ${port}.`);
});

module.exports.app = app;