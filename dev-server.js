var express = require('express');
var bodyParser = require("body-parser"); 
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // 获取post请求参数需要


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/api/1.0/web/1.0/user/payment/sources', function (req, res) {
	if(true){
		//res.send({"status":true,"code":0,"message":"","data":{"id":10,"vendor_id":1,"food_no":"122","name":"\u6d4b\u8bd5\u83dc\u540d1add","description":"\u4e09\u751f\u4e09\u4e16\u7b97\u662f","logo":"","price":1222,"has_package":1,"type":2,"type_name":"\u6d4b\u8bd5\u5206\u7c7b\u540d\u5b57","vendor_name":"\u8fd9\u4e2a\u662f\u7b2c1\u4e2a\u5546\u6237","operating_status":2,"business_time":"16:55~12:00","packages":[{"package_id":1,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":4,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":7,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":8,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f021111","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":9,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f012121","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]}]}});
	res.send({"status":true,"data":{"total":1,"list":[
	
	{"sourceId":"card_1CGfPMBOfYhptLUaknPUzh1x","isDefault":false,"sourceType":"credit","last4":1111,"brand":"Master"},
	{"sourceId":"card_1CEfPMFOfYhptLUaknPUzh1x","isDefault":false,"sourceType":"credit","last4":2222,"brand":"Master"},
	{"sourceId":"card_1CBfPMFOfYhptLUaknPUzh1x","isDefault":true,"sourceType":"credit","last4":3333,"brand":"Master"},
	{"sourceId":"card_1CGAPMFOfYhptLUaknPUzh1x","isDefault":false,"sourceType":"credit","last4":4444,"brand":"Master"},
	]}});
	}
	else{
		res.send({code: 333, message: "fail", status: false, data: {list:[], total:2}});
	}
})

app.get('/api/user', function (req, res) {
	console.log(req.headers.cookie);
	// 设置HttpOnly=true的cookie不能被js获取到
	// 设置了Secure=true，那么这个cookie只能用https协议发送给服务器，用http协议是不发送的
	res.cookie('bbbbbserver', 'zzzzz', { domain: '10.11.1.114', path: '/' });
	if(req.query.token == "abcd1234"){
		res.send({"data":[{"id":"410000200204153643","name":"Patricia Taylor","age":26},{"id":"320000198509162573","name":"Helen Brown","age":27},{"id":"640000198111107878","name":"William Harris","age":28}]});
	}else{
		res.send({name: "", age: "", code: "01", msg: "toke不正确"});
	}
})

app.post('/api/login', function (req, res) {
	if(req.body.userMobile == "123" && req.body.passWord == "abc"){
		res.send({token: "abcd1234", code: "00", msg: "成功"});
	}else{
		res.send({token: "", code: "01", msg: "请输入正确的账号或密码"});
	}
})
 
app.post('/api/1.0/web/1.0/user/payment/pay', function (req, res) {
	if(true){
		//res.send({"status":true,"code":0,"message":"","data":{"id":10,"vendor_id":1,"food_no":"122","name":"\u6d4b\u8bd5\u83dc\u540d1add","description":"\u4e09\u751f\u4e09\u4e16\u7b97\u662f","logo":"","price":1222,"has_package":1,"type":2,"type_name":"\u6d4b\u8bd5\u5206\u7c7b\u540d\u5b57","vendor_name":"\u8fd9\u4e2a\u662f\u7b2c1\u4e2a\u5546\u6237","operating_status":2,"business_time":"16:55~12:00","packages":[{"package_id":1,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":4,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":7,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":8,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f021111","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":9,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f012121","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]}]}});
	res.send({"status":true,"code":0,"message":"\u4e0b\u5355\u6210\u529f\uff01","data": {
    "id": "212",
    "order_id": "16516546546546545645",
    "amount": 1564.12
  }});
	}
	else{
		res.send({code: 333, message: "fail", status: false, data: {list:[], total:2}});
	}
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


