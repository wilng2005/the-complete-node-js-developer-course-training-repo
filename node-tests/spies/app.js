var db = require("./db");

boo = ()=>{
	return db.verifyLogin("Cow","cow");
};

module.exports={boo};