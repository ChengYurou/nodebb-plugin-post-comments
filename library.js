var db_post = require('./public/db-posts');

(function(module) {
	"use strict";
	var bodyParser = require('body-parser');
	var posts,comments = {};
	var comment;

	comments.init = function(params, callback) {
		console.log('is there wrong');

		var app = params.router;

		app.post('/posts',function(req,res){
			res.json(JSON.stringify(posts));
		});

		app.post("/save/comment",function(req,res) {
		    comment = req.body;

			db_post.saveComment(comment,function(result) {
				res.status(201).json({value:'保存评论成功！'});
			})
		})
		callback();
	};

	comments.addScripts = function(scripts,callback) {
		// scripts.push('plugins/nodebb-plugin-post-comments/lib/main.js');
		callback(null, scripts);
	};

	comments.showPosts = function(postsData,callback) {

		posts = postsData;
		callback(null, postsData);
	};

	module.exports = comments;
}(module));