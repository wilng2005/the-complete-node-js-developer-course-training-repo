var testPromise = new Promise((resolve , reject)=>{
	setTimeout(()=>{
		resolve('Hey it worked!');
		// reject('Hey it didnt work!');
	},2500);
});

testPromise.then((message)=>{
	console.log("success: "+message);
},(error)=>{
	console.log("failure:"+error);
});