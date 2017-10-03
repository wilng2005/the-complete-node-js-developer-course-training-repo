// var obj = {
// 	name: 'Andrew',
// 	tempFunc: ()=>{
// 		console.log("this is a temp func");
// 	}
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Andrew","age":34}';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
	title: 'Some title',
	body: 'Some body'
};

//originalNoteString

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');

//note
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
console.log(note.body);