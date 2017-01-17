const {MongoClient, ObjectID} = require('mongodb');

db.collection('Todos').find({
		completed: true
	}).count().then((count) => {
		console.log('Todos');
		console.log(JSON.stringify(count, undefined, 2));
	}, (err) => {
		console.log('error')
	});