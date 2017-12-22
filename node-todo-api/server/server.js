var mongoose = require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
	text:{
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed:{
		type: Boolean,
		default: false
	},
	completedAt:{
		type: Number,
		default: null
	}
});

var newTodo = new Todo({
	text:true
});

// newTodo.save().then((doc)=>{
// 	console.log('Saved todo', doc);
// },(e)=>{
// 	console.log('Unable to save todo');
// 	console.log(e);
// });

// new user model
// email / required/ trimmed / string /minlength 1
// 

var User = mongoose.model('User',{
	name:{
		type: String,
		required: true,
		minlength: 1,
		trim:true
	},
	email:{
		type: String,
		required: true,
		trim: true,
		minlength:1
	}
}); 

var newUser = new User({
	name: "Wil Ng",
	email: "wil.ng.2005@gmail.com"
});

newUser.save().then((doc)=>{
	console.log(JSON.stringify(doc,undefined,2));
},(err)=>{
	console.log(err);
});