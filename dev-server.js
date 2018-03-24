var express = require('express');
var app = express();

app.use(express.static('dist')); // server目录(访问静态资源文件)
 
/*
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/dist/index.html" );
});
*/

app.get('/login', function (req, res) {
   res.sendFile( __dirname + "/dist/index.html" );
});

app.get('/personal', function (req, res) {
   res.sendFile( __dirname + "/dist/index.html" );
});

var server = app.listen(8060, function () {
 
  //var host = server.address().address
  var port = server.address().port
  
  console.log('Server running at http://127.0.0.1:' + port);
  
  // 运行URL
  // http://127.0.0.1:8060
  // http://127.0.0.1:8060/login
  // http://127.0.0.1:8060/personal
 
})
