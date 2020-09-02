var express = require('express');
var router = express.Router();
var utils = require("../moudle/utils")
var mongose = require("../moudle/mongose.js")
/* GET home page. */
router.get('/',async function(req, res, next) {
  // var obj = await utils.readFile("static/index.json");
  var obj = await mongose.contentsFind({},0,3);
  console.log(obj)
  res.render('blog/index', {data:obj});
});
router.get('/list.html', function(req, res, next) {
  res.render('blog/list', { title: 'Express' });
});
module.exports = router;
