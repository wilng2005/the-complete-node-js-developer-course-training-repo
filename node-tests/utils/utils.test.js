const expect = require('expect');
const utils = require('./utils');

it('should add two numbers',()=>{
	let result = utils.add(5,3);
	expect(result).toBeA('number').toBe(8);
});

it('should square a number',()=>{
	let result = utils.square(5);
	expect(result).toBe(25).toBeA('number');
});

it('should set a user\'s name',()=>{
	let user = {
		age: 32,
		firstName: "Boo"
	};

	utils.setName(user, "John Smith");

	expect(user).toBeA('object').toInclude({
		firstName:"John"
	}).toInclude({
		lastName:"Smith"
	}).toInclude({
		age:32
	}).toExclude({
		firstName: "Boo"
	});
});