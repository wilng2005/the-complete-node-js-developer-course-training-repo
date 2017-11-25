const expect = require('expect');
const rewire = require('rewire');
var app = rewire('./app');

describe('spies', ()=>{
	it('should be able to just create a spy and stuff right?',()=>{
		let spy = expect.createSpy();
		spy("Whee!");
		expect(spy).toHaveBeenCalledWith('Whee!');
	});

	it('should be able to mock inside app',()=>{
		let db = {
			verifyLogin:expect.createSpy()
		};
		app.__set__('db',db);
		let result = app.boo();
		expect(db.verifyLogin).toHaveBeenCalledWith("Cow","cow");
	});
});