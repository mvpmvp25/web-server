var express = require('express');
var app = express();

app.use(express.static('dist')); // server目录(访问静态资源文件)
 
var server = app.listen(8060, function () {
 
  //var host = server.address().address
  var port = server.address().port
  
  console.log('Server running at http://127.0.0.1:' + port); 
   
  // 运行URL
  // http://127.0.0.1:8060
  // http://127.0.0.1:8060/index.html
 
})