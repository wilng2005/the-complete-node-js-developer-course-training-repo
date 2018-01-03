const expect = require('expect');
const request = require('superagent');

//const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// beforeEach((done)=>{
// 	Todo.remove({}).then(()=>done());
// });

//console.log(app);

describe('POST /todos',()=>{
	it('should create a new todo',(done)=>{
		var text = 'Test todo text 333';
		expect(true).toBe(true);
		//request('')

		request
			.post('http://localhost:3000/todos')
		 	.send({text:"Bleah"})
			.end((err,res)=>{
				//console.log("Response:",res.body);
				if(err){
					return done(err);
				}else{
					expect(res.body.doc.text).toBe('Bleah');
					done();
				}

				// Todo.find().then((todos)=>{
				// 	expect(todos.length).toBe(1);
				// 	expect(todos[0].text).toBe(text);
				// 	done();
				// });
			})
			// .expect(200, (e)=>{
			// 	console.log('status error:',e);
			// 	done(e);
			// })
			// .expect((res)=>{
			// 	console.log("response:",res);
			// 	done();
			// 	//expect(res.body.text).toBe(text);
			// })
			
			// .catch((e)=>{
			// 	console.log("Error Boo",e);
			// 	done(e);
			// });
	});
});