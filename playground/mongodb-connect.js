const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Error connecting to the db');
	}

	console.log('connected to Mongodb server');

	// delete one

	//delete many

	db.collection('Todos').deleteMany({
		text: 'Eat lunch'
	}).then((res) => {
		console.log(res)
	});

	// find one and delete

	


	// db.close();
});