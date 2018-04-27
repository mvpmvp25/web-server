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

app.get('/api/1.0/web/1.0/user/order/detail', function (req, res) {
	if(true){
		//res.send({"status":true,"code":0,"message":"","data":{"id":10,"vendor_id":1,"food_no":"122","name":"\u6d4b\u8bd5\u83dc\u540d1add","description":"\u4e09\u751f\u4e09\u4e16\u7b97\u662f","logo":"","price":1222,"has_package":1,"type":2,"type_name":"\u6d4b\u8bd5\u5206\u7c7b\u540d\u5b57","vendor_name":"\u8fd9\u4e2a\u662f\u7b2c1\u4e2a\u5546\u6237","operating_status":2,"business_time":"16:55~12:00","packages":[{"package_id":1,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":4,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":7,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":8,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f021111","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":9,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f012121","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]}]}});
	res.send({
  "status": true,
  "code": "0",
  "message": "\\u83b7\\u53d6\\u6570\\u636e\\u6210\\u529f\\uff01",
  "data": [
    {
      "order_id": "20180326115544173009609",
      "merchants_name": "\\u9ebb\\u8fa3\\u5c0f\\u5f53\\u5bb6",
      "merchants_id": 24234,
      "order_status": 1,
      "take_food_time": "2018-03-26 12:40:00",
      "order_grand_total": "70.0000",
      "created_at": "2018-03-26 11:55:45",
      "pay_type": null,
      "take_food_code": null,
      "packing_fee": "0.0000",
      "coupons_fee": "0.0000",
      "service_rate": 0,
      "items": [
        {
          "product_id": 356,
          "product_name": "\\u897f\\u6b27\\u5c0f\\u5403",
          "product_counts": 2,
          "product_price": "20.0000"
        },
        {
          "product_id": 654,
          "product_name": "iv\\u6a58\\u68a8\\u7eb1",
          "product_counts": 3,
          "product_price": "10.0000"
        }
      ]
    }
  ]
});
	}
	else{
		res.send({code: 333, message: "fail", status: false, data: {list:[], total:2}});
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

app.get('/api/1.0/web/1.0/user/payment/sources', function (req, res) {
	if(true){
		//res.send({"status":true,"code":0,"message":"","data":{"id":10,"vendor_id":1,"food_no":"122","name":"\u6d4b\u8bd5\u83dc\u540d1add","description":"\u4e09\u751f\u4e09\u4e16\u7b97\u662f","logo":"","price":1222,"has_package":1,"type":2,"type_name":"\u6d4b\u8bd5\u5206\u7c7b\u540d\u5b57","vendor_name":"\u8fd9\u4e2a\u662f\u7b2c1\u4e2a\u5546\u6237","operating_status":2,"business_time":"16:55~12:00","packages":[{"package_id":1,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":4,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":7,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":8,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f021111","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":9,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f012121","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]}]}});
	res.send({"status":true,"data":{"total":1,"list":[
	
	{"sourceId":"card_1CGfPMBOfYhptLUaknPUzh1x","isDefault":false,"sourceType":"credit","last4":1111,"brand":"Master"},
	{"sourceId":"card_1CEfPMFOfYhptLUaknPUzh1x","isDefault":false,"sourceType":"credit","last4":2222,"brand":"Master"},
	{"sourceId":"card_1CBfPMFOfYhptLUaknPUzh1x","isDefault":true,"sourceType":"credit","last4":3333,"brand":"Master"},
	{"sourceId":"card_1CGAPMFOfYhptLUaknPUzh1x","isDefault":false,"sourceType":"credit","last4":4444,"brand":"Master"},
	{"sourceId":"card_1XGfPMFOfYhptLUaknPUzh1x","isDefault":false,"sourceType":"credit","last4":5555,"brand":"Master"},
	{"sourceId":"card_1CYfPMFOfYhptLUaknPUzh1x","isDefault":false,"sourceType":"credit","last4":6666,"brand":"Master"},
	{"sourceId":"card_1CMfPMFOfYhptLUaknPUzh1x","isDefault":false,"sourceType":"credit","last4":7777,"brand":"Master"},
	{"sourceId":"card_1CVfPMFOfYhptLUaknPUzh1x","isDefault":false,"sourceType":"credit","last4":8888,"brand":"Master"},
	{"sourceId":"card_1CRfPMFOfYhptLUaknPUzh1x","isDefault":false,"sourceType":"credit","last4":9999,"brand":"Master"},
	]}});
	}
	else{
		res.send({code: 333, message: "fail", status: false, data: {list:[], total:2}});
	}
})

app.post('/api/1.0/web/1.0/user/order/checkout', function (req, res) {
	if(true){
		//res.send({"status":true,"code":0,"message":"","data":{"id":10,"vendor_id":1,"food_no":"122","name":"\u6d4b\u8bd5\u83dc\u540d1add","description":"\u4e09\u751f\u4e09\u4e16\u7b97\u662f","logo":"","price":1222,"has_package":1,"type":2,"type_name":"\u6d4b\u8bd5\u5206\u7c7b\u540d\u5b57","vendor_name":"\u8fd9\u4e2a\u662f\u7b2c1\u4e2a\u5546\u6237","operating_status":2,"business_time":"16:55~12:00","packages":[{"package_id":1,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":4,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":7,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":8,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f021111","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":9,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f012121","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]}]}});
	res.send({"status":true,"code":0,"message":"\u4e0b\u5355\u6210\u529f\uff01","data":"201804131812396027209"});
	}
	else{
		res.send({code: 333, message: "fail", status: false, data: {list:[], total:2}});
	}
})

app.get('/api/1.0/web/1.0/user/order/checkout', function (req, res) {
	if(true){
		//res.send({"status":true,"code":0,"message":"","data":{"id":10,"vendor_id":1,"food_no":"122","name":"\u6d4b\u8bd5\u83dc\u540d1add","description":"\u4e09\u751f\u4e09\u4e16\u7b97\u662f","logo":"","price":1222,"has_package":1,"type":2,"type_name":"\u6d4b\u8bd5\u5206\u7c7b\u540d\u5b57","vendor_name":"\u8fd9\u4e2a\u662f\u7b2c1\u4e2a\u5546\u6237","operating_status":2,"business_time":"16:55~12:00","packages":[{"package_id":1,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":4,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":7,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":8,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f021111","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":9,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f012121","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]}]}});
	res.send({"status":true,"code":0,"message":"\u4e0b\u5355\u6210\u529f\uff01","data":"201804131812396027209"});
	}
	else{
		res.send({code: 333, message: "fail", status: false, data: {list:[], total:2}});
	}
})

app.get('/api/1.0/web/1.0/user/cart/list', function (req, res) {
	if(true){
		//res.send({"status":true,"code":0,"message":"","data":{"id":10,"vendor_id":1,"food_no":"122","name":"\u6d4b\u8bd5\u83dc\u540d1add","description":"\u4e09\u751f\u4e09\u4e16\u7b97\u662f","logo":"","price":1222,"has_package":1,"type":2,"type_name":"\u6d4b\u8bd5\u5206\u7c7b\u540d\u5b57","vendor_name":"\u8fd9\u4e2a\u662f\u7b2c1\u4e2a\u5546\u6237","operating_status":2,"business_time":"16:55~12:00","packages":[{"package_id":1,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":4,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":7,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":8,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f021111","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":9,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f012121","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]}]}});
	res.send({"status":true,"code":"0","message":"\u83b7\u53d6\u6570\u636e\u6210\u529f\uff01","data":{"shop_name":"\u8fd9\u4e2a\u662f\u7b2c1\u4e2a\u5546\u6237","shop_address":"\u4e5d\u9f99\u7687\u540e\u5927\u9053\u4e1c","prepare_time":1,"vendor_distance":16715.52,"price_total":5524992,"shop_id":"1","product_list":[{"id":2,"product_id":10,"price":1222,"name":"\u8fd9\u662f\u7b2c10\u4e2a\u83dc","product_num":1,"has_package":true,"package":[{"id":8,"name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f021111","son_package":[{"sid":"3","name":"u9009u98792","price":"2"},{"sid":"4","name":"u9009u98791","price":"5522526"}]},{"id":9,"name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f012121","son_package":[{"sid":"3","name":"u9009u98792","price":"2"},{"sid":"2","name":"u9009u98794","price":"5"}]}]},{"id":1,"product_id":10,"price":1222,"name":"\u8fd9\u662f\u7b2c10\u4e2a\u83dc","product_num":1,"has_package":true,"package":[{"id":8,"name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f021111","son_package":[{"sid":"3","name":"u9009u98792","price":"2"},{"sid":"2","name":"u9009u98794","price":"3"}]},{"id":9,"name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f012121","son_package":[{"sid":"2","name":"u9009u98794","price":"5"},{"sid":"4","name":"u9009u98791","price":"1"},{"sid":"3","name":"u9009u98792","price":"2"}]}]}]}})
	}else{
		res.send({code: 333, message: "fail", status: false, data: {list:[], total:2}});
	}
})

app.get('/api/1.0/web/1.0/user/food/detail', function (req, res) {
	if(true){
		//res.send({"status":true,"code":0,"message":"","data":{"id":10,"vendor_id":1,"food_no":"122","name":"\u6d4b\u8bd5\u83dc\u540d1add","description":"\u4e09\u751f\u4e09\u4e16\u7b97\u662f","logo":"","price":1222,"has_package":1,"type":2,"type_name":"\u6d4b\u8bd5\u5206\u7c7b\u540d\u5b57","vendor_name":"\u8fd9\u4e2a\u662f\u7b2c1\u4e2a\u5546\u6237","operating_status":2,"business_time":"16:55~12:00","packages":[{"package_id":1,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":4,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":7,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f01","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":8,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f021111","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]},{"package_id":9,"package_name":"\u6d4b\u8bd5\u5957\u9910\u540d\u79f012121","package_type":1,"package_tags":[{"tag_id":"4","tag_name":"u9009u98791","tag_price":"1"},{"tag_id":"3","tag_name":"u9009u98792","tag_price":"2"},{"tag_id":"2","tag_name":"u9009u98794","tag_price":"3"}]}]}});
	res.send({
            "status": true,
            "code": 0,
            "message": "",
            "data": {
                "id": 10,
                "vendor_id": 1,
                "food_no": "122",
                "name": "测试菜名1add",
                "description": "三生三世算是",
                "logo": "",
                "price": 1222,
                "has_package": 1,
                "type": 2,
                "type_name": "测试分类名字",
                "vendor_name": "这个是第1个商户",
                "operating_status": 2,
                "business_time": "16:55~12:00",
                "packages": []
            }
        })
	}else{
		res.send({code: 333, message: "fail", status: false, data: {list:[], total:2}});
	}
})

app.get('/api/1.0/web/1.0/user/banner/list', function (req, res) {
	if(true){
		res.send({code: 666, message: "ok", status: true, data: {list:[{
      "jump_url": "https://www.baidu.com/",
      "image_path": "http://p1.meituan.net/deal/__44172153__6654046.jpg",
    },{
      "jump_url": "https://www.baidu.com/",
      "image_path": "http://p1.meituan.net/deal/0b6e9d622fd22934b12bbad6fb9b28be54079.jpg",
    },{
      "jump_url": "https://www.baidu.com/",
      "image_path": "http://p0.meituan.net/deal/b8123465167c4256f10196060e94c197249808.jpg",
    }], total:79}});
	}else{
		res.send({code: 333, message: "fail", status: false, data: {list:[], total:2}});
	}
})

app.get('/api/1.0/web/1.0/user/vendor/detail', function (req, res) {
	if(true){
		res.send({code: 666, message: "ok", status: true, data: {
  "id": 1,
  "name": "aaaa",
  "description": "tty法师打发斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬是",
  "logo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521549613549&di=eab3068717056893ec18bf68a7411e12&imgtype=0&src=http%3A%2F%2Fimages.ali213.net%2Fpicfile%2Fpic%2F2013-01-23%2F927_110420130017-18.jpg",
  "score": 2.5,
  "tags": "121212,3333,4444",
  "spend": "67",
  "prepare_time": 8,
  "contact": "aaaa",
  "contact_num": "",
  "mobile": "11112222",
  "email": "as@11.com1",
  "district": 165,
  "address": "白石洲凡事都经过",
  "business_time": "5:00 PM - 10:00",
  "in_business": 0,
  "status": 2,
  "bank_info": {
    "bank_num": "",
    "bank_owner": "rrrr",
    "bank_type": ""
  },
  "protocol_info": {
    "start_time": "",
    "end_time": "",
    "is_forever": 0,
    "rate": "12",
    "settlement_cycle": 0,
    "remark": "",
    "status": 0
  }
}
	});
	}else{
		res.send({code: 333, message: "fail", status: false, data: {list:[], total:2}});
	}
})

app.get('/api/1.0/web/1.0/user/food/types', function (req, res) {
	if(true){
		res.send({code: 666, message: "ok", status: true, data: {
  "list": [{
    "id": 535,
    "name": "地方撒几方面"
		},{
    "id": 5437,
    "name": "防守打法更换粉丝"
		},
		{
    "id": 5666,
    "name": "方式登记发票"
		},{
    "id": 5437,
    "name": "防守打法更换粉丝"
		},
		{
    "id": 5666,
    "name": "方式登记发票"
		}]
}
	});
	}else{
		res.send({code: 333, message: "fail", status: false, data: {list:[], total:2}});
	}
})
app.get('/api/1.0/web/1.0/user/food/list', function (req, res) {
	if(true){
		res.send({code: 666, message: "ok", status: true, data: {
  "list": [{
    "id": 1,
    "name": "xxxx",
	"jiaqian": 16,
	"des":"cajsok dnhasoidhn dahsid aiohdia sdhiaos daosiuhd as hdioashd dh aosidh da",
	"imgUrl": "http://news.k618.cn/society/rd/201804/W020180407271440699691.jpg"
		},{
    "id": 1,
    "name": "xxxx",
	"jiaqian": 16,
	"des":"cajsok dnhasoidhn dahsid aiohdia sdhiaos daosiuhd as hdioashd dh aosidh da",
	"imgUrl": ""
		},
		{
    "id": 1,
    "name": "xxxx",
	"jiaqian": 16,
	"des":"cajsok dnhasoidhn dahsid aiohdia sdhiaos daosiuhd as hdioashd dh aosidh da",
	"imgUrl": "http://news.k618.cn/society/rd/201804/W020180407271440699691.jpg"
		}]
}
	});
	}else{
		res.send({code: 333, message: "fail", status: false, data: {list:[], total:2}});
	}
})

app.get('/api/1.0/web/1.0/user/vendor/list', function (req, res) {
	if(req.query.lon == "114.7033538" && req.query.lat == "22.5432757"){
		res.send({code: 666, message: "ok", status: true, data: {list:[{
			"id":101,
      "name": "这个是第425984个商户",
      "description": "saf蛙教教我吉林省",
      "logo": "http://p0.meituan.net/shaitu/d885715726129ce5784e4a1fae3a9950166083.jpg",
      "spend": "4",
	  "score": 3.5,
	  "distance": 454,
      "prepare_time": 7,
      "business_time": "1",
      "in_business": 0
    },{
		"id":102,
      "name": "这个是第425984个商户",
      "description": "saf蛙教教我吉林省",
      "logo": "http://p0.meituan.net/shaitu/12c479a00e2d8bda7cb956f6cdada6dd158915.jpg",
      "spend": "5",
      "prepare_time": 8,
	  "score": 3.5,
	  "distance": 454,
      "business_time": "1",
      "in_business": 4
    },{
		"id":103,
      "name": "这个是第425984个商户",
      "description": "saf蛙教教我吉林省",
      "logo": "http://p0.meituan.net/shaitu/d885715726129ce5784e4a1fae3a9950166083.jpg",
      "spend": "6",
	  "distance": 454,
      "prepare_time": 9,
	  "score": 3.5,
      "business_time": "1",
      "in_business": 0
    },{
		"id":104,
      "name": "这个是第425984个商户",
      "description": "saf蛙教教我吉林省",
      "logo": "http://p0.meituan.net/shaitu/d885715726129ce5784e4a1fae3a9950166083.jpg",
      "spend": "6",
	  "distance": 454,
      "prepare_time": 9,
	  "score": 3.5,
      "business_time": "1",
      "in_business": 0
    },{
		"id":105,
      "name": "这个是第425984个商户",
      "description": "saf蛙教教我吉林省",
      "logo": "http://p0.meituan.net/shaitu/d885715726129ce5784e4a1fae3a9950166083.jpg",
      "spend": "6",
	  "distance": 454,
      "prepare_time": 9,
	  "score": 3.5,
      "business_time": "1",
      "in_business": 0
    },{
		"id":106,
      "name": "这个是第425984个商户",
      "description": "saf蛙教教我吉林省",
      "logo": "http://p0.meituan.net/shaitu/d885715726129ce5784e4a1fae3a9950166083.jpg",
      "spend": "6",
	  "distance": 454,
      "prepare_time": 9,
	  "score": 3.5,
      "business_time": "1",
      "in_business": 0
    },{
		"id":107,
      "name": "这个是第425984个商户",
      "description": "saf蛙教教我吉林省",
      "logo": "http://p0.meituan.net/shaitu/d885715726129ce5784e4a1fae3a9950166083.jpg",
      "spend": "6",
	  "distance": 454,
      "prepare_time": 9,
	  "score": 3.5,
      "business_time": "1",
      "in_business": 0
    },{
		"id":108,
      "name": "这个是第425984个商户",
      "description": "saf蛙教教我吉林省",
      "logo": "http://p0.meituan.net/shaitu/d885715726129ce5784e4a1fae3a9950166083.jpg",
      "spend": "6",
	  "distance": 454,
      "prepare_time": 9,
	  "score": 3.5,
      "business_time": "1",
      "in_business": 0
    },{
		"id":109,
      "name": "这个是第425984个商户",
      "description": "saf蛙教教我吉林省",
      "logo": "http://p0.meituan.net/shaitu/d885715726129ce5784e4a1fae3a9950166083.jpg",
      "spend": "6",
	  "distance": 454,
      "prepare_time": 9,
	  "score": 3.5,
      "business_time": "1",
      "in_business": 0
    },{
		"id":110,
      "name": "这个是第425984个商户",
      "description": "saf蛙教教我吉林省",
      "logo": "http://p0.meituan.net/shaitu/d885715726129ce5784e4a1fae3a9950166083.jpg",
      "spend": "6",
	  "distance": 454,
      "prepare_time": 9,
	  "score": 3.5,
      "business_time": "1",
      "in_business": 0
    }], total:40}});
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


