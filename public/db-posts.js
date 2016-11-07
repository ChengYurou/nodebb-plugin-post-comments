var url = "mongodb://localhost:27017/nodebb";
var MongoClient = require('mongodb').MongoClient;

exports.saveComment = function (comment, callback) {

	console.log(comment.pid);

	MongoClient.connect(url, function (err, db) {

		var collection = db.collection('objects');

		collection.update({"pid": 32},
			{
				$push: {
					"comments": {
						"com_id": 10,
						"com_content": comment.com_content
					}
				}
			}, function (err, result) {
				callback(result);
				db.close()
			});
	})
}