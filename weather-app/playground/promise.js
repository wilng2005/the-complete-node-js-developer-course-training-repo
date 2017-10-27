var asyncAdd = (a, b)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(typeof a === 'number' && typeof b === 'number'){
				resolve(a + b);
			}else{
				reject("Arguments must be numbers.");
			}
		},1500);
	});
}

asyncAdd(5,"7").then((result)=>{
	console.log("Result", result);
	return asyncAdd(result,33);
}).then((result)=>{
	console.log("Should be 45:", result);
}).catch((error)=>{
	console.log("Gah error! "+error);
});

// var testPromise = new Promise((resolve , reject)=>{
// 	setTimeout(()=>{
// 		resolve('Hey it worked!');
// 		// reject('Hey it didnt work!');
// 	},2500);
// });

// testPromise.then((message)=>{
// 	console.log("success: "+message);
// },(error)=>{
// 	console.log("failure:"+error);
// });