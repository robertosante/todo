// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Error connecting to the db');
	}

	console.log('connected to Mongodb server');

	db.collection('Todos').find({
		completed: true
	}).count().then((count) => {
		console.log('Todos');
		console.log(JSON.stringify(count, undefined, 2));
	}, (err) => {
		console.log('error')
	});


	db.close();
});