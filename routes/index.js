var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
/* GET home page. */
router.get('/', function(req, res) {
	/*var conn = mongoose.connect('mongodb://localhost/chatRoom');
	      var Schema = mongoose.Schema
	      , ObjectId = Schema.ObjectId;
	      
	      var Person = new Schema({
	          title   : { type: String }
	        , age     : { type: Number, min: 5, max: 20 }
	        , meta    : {
	              likes : [String]
	            , birth : { type: Date }
	          }
	      });
	      var p = mongoose.model('ModelName22', Person);
	      
	      var Blog = mongoose.model("ModelName22");



	      var blog1 = new Blog();  
	            blog1.id22 = 4;  
	            blog1.title="ully";
	            blog1.save(function(err){
	                if (err) {
	                  console.log('save failed');  
	                }
	                console.log('save success'); 
	            });*/
  	res.render('index', { title: 'Express' });
});

module.exports = router;


