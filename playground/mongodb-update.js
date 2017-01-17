const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Error connecting to the db');
	}

	console.log('connected to Mongodb server');

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID("58755a76bf3457c97a4eae76")
	}, {
		$set: {
			completed: false
		}
	}, {
		returnOriginal: false
	}).then((res) => {
		console.log(res);
	});

	// db.close();
});