module.exports.add=(x,y)=>x+y;

module.exports.square=(x)=>x*x;

module.exports.setName=(user,name)=>{
	let nameArr = name.split(" ");
	user.firstName=nameArr[0];
	user.lastName=nameArr[1];
};