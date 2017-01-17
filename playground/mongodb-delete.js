const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Error connecting to the db');
	}

	console.log('connected to Mongodb server');

	// delete one
	
	db.collection('Todos').deleteOne({
		text: 'Eat lunch'
	}).then((res) => {
		console.log(res)
	});

	//delete many
	db.collection('Todos').deleteMany({
		text: 'Eat lunch'
	}).then((res) => {
		console.log(res)
	});

	// find one and delete
	db.collection('Todos').findOneAndDelete({
		text: 'Something to do'
	}).then((res) => {
		console.log(res);
	});

	// db.close();
});