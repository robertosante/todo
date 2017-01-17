var mongoose = require('mongoose');


var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {Todo};
/*
var newTodo = new Todo({
	text: 'Sleep2'
});

newTodo.save().then((doc) => {
	console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
	console.log(e);
})
*/