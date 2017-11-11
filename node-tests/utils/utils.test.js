const utils=require('./utils');

it('should add two numbers',()=>{
	let result = utils.add(5,3);
	if(result!==8){
		throw new Error(`Expected 8 but result was ${result}.`);
	}
});

it('should square a number',()=>{
	let result = utils.square(5);
	if(result!==25){
		throw new Error(`Expected 25 but result was ${result}.`);
	}
});