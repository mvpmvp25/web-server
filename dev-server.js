var express = require('express');
var bodyParser = require("body-parser"); 
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // 获取post请求参数需要

/*
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
*/ 
app.post('/api/login', function (req, res) {
	if(req.body.userMobile == "123" && req.body.passWord == "abc"){
		res.send({token: "abcd1234", code: "00", msg: "成功"});
	}else{
		res.send({token: "", code: "01", msg: "请输入正确的账号或密码"});
	}
})

app.get('/api/1.0/web/1.0/user/banner/list', function (req, res) {
	if(true){
		res.send({code: 666, message: "ok", status: true, data: {list:[{
      "bar": "http://p1.meituan.net/deal/__44172153__6654046.jpg",
      "spend": "1",
    },{
      "bar": "http://p1.meituan.net/deal/0b6e9d622fd22934b12bbad6fb9b28be54079.jpg",
      "spend": "1",
    },{
      "bar": "http://p0.meituan.net/deal/b8123465167c4256f10196060e94c197249808.jpg",
      "spend": "1",
    }], total:79}});
	}else{
		res.send({code: 333, message: "fail", status: false, data: {list:[], total:2}});
	}
})

app.get('/api/1.0/web/1.0/user/vendor/list', function (req, res) {
	if(req.query.lon == "88" && req.query.lat == "99"){
		res.send({code: 666, message: "ok", status: true, data: {list:[{
      "name": "这个是第425984个商户",
      "description": "saf蛙教教我吉林省",
      "logo": "http://p0.meituan.net/shaitu/d885715726129ce5784e4a1fae3a9950166083.jpg",
      "spend": "1",
      "prepare_time": 1,
      "business_time": "1",
      "in_business": 0
    },{
      "name": "这个是第425984个商户",
      "description": "saf蛙教教我吉林省",
      "logo": "http://p0.meituan.net/shaitu/12c479a00e2d8bda7cb956f6cdada6dd158915.jpg",
      "spend": "1",
      "prepare_time": 1,
      "business_time": "1",
      "in_business": 0
    },{
      "name": "这个是第425984个商户",
      "description": "saf蛙教教我吉林省",
      "logo": "http://p0.meituan.net/shaitu/d885715726129ce5784e4a1fae3a9950166083.jpg",
      "spend": "1",
      "prepare_time": 1,
      "business_time": "1",
      "in_business": 0
    }], total:79}});
	}else{
		res.send({code: 333, message: "fail", status: false, data: {list:[], total:2}});
	}
})

app.get('/api/user', function (req, res) {
	if(req.query.token == "abcd1234"){
		res.send({name: "李大双", age: "19", code: "00", msg: "成功"});
	}else{
		res.send({name: "", age: "", code: "01", msg: "toke不正确"});
	}
})

app.get('/api/version', function (req, res) {
	res.send({version: "1.3.9", code: "00", msg: "成功"});
})
 
var server = app.listen(8071, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("服务已启动")
 
});

// 运行URL
// http://127.0.0.1:8071/api/user?token=abcd1234

/*

var express = require('express');
var app = express();

//  主页输出 "Hello World"
app.get('/', function (req, res) {
   console.log("主页 GET 请求");
   res.send('Hello GET');
})
 
 
//  POST 请求
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})
 
//  /del_user 页面响应
app.get('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('删除页面');
})
 
//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
})
 
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})
 
 
var server = app.listen(8082, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("服务已启动")
 
});

*/


