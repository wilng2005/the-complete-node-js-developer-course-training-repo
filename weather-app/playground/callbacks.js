var getUser = (id, callback)=>{
	var user = {
		id:id,
		name: "Vixram"
	};

	setTimeout(()=>{
		callback(user);
	},3000);
};

getUser(33, (userObject)=>{
	console.log(userObject);
});

