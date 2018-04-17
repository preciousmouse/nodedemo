var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
// 	res.render('index', { title: 'Express' });
// });

router.post('/login',function(req, res, next){
	var result = {"status":true};
	res.json(result);
});
router.post('/home',function(req, res, next){
	var result = {"status":true};
	res.json(result);
});
router.post('/recharge/pay',function(req, res, next){
	var result = {"status":"success"};
	res.json(result);
});
router.post('/search/clearhistory',function(req, res, next){
	var result = {"status":"success"};
	res.json(result);
});


module.exports = router;
