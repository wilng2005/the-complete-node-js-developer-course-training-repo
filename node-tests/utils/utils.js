module.exports.add=(x,y)=>x+y;

module.exports.asyncAdd=(x,y, callback)=>{
	setTimeout(()=>{
		callback(x+y);
	},1000);
};

module.exports.square=(x)=>x*x;

module.exports.asyncSquare=(x,callback)=>{
	setTimeout(()=>{
		callback(x*x);
	},500)
};

module.exports.setName=(user,name)=>{
	let nameArr = name.split(" ");
	user.firstName=nameArr[0];
	user.lastName=nameArr[1];
};