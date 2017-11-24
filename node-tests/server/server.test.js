const request = require('supertest');
const expect = require('expect');
var app = require('./server.js').app;

describe('server.js',()=>{
	describe('GET /',()=>{
		it('should return hello world response',(done)=>{
			request(app)
			.get('/')
			.expect(404)
			.expect((res)=>{
				expect(res.body).toInclude({
					error: 'Page not found.'
				});
			})
			.end(done);
		});
	});

	describe('GET /users',()=>{
		it('should return list of users',(done)=>{
			request(app)
			.get('/users')
			.expect(200)
			.expect((res)=>{
				expect(res.body).toInclude({
				name: 'Wil',
				age: 12	
			})})
			.end(done);
		});
	});
});
