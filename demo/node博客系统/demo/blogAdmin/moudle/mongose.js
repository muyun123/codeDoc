var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true });

var kittySchema = mongoose.Schema({
    id: String,
    title: String,
    time: String,
    img: String,
    content: String
  })

  var Contents = mongoose.model('Contents', kittySchema);

//   var fluffy = new Contents();
  var contentsFind =  function(obj,skip=0,limit=0){
     return new Promise((resolve,reject)=>{
         var query = Contents.find(obj);
        if(skip!=0) query.skip(skip);//指定跳过的文档条数
        if(limit!=0) query.limit(limit);//指定查询结果的最大条数
        query.exec(function (err, kittens) {
            if (err) return console.error(err);
            resolve(kittens);
          })
      })
  }
  
module.exports = {contentsFind}
