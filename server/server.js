/**
 * New node file
 */
var urlencoded = require("body-parser").urlencoded; // 非nodejs已有的原始模块需要执行npm install 包名的方式自动去npm上下载
// console.log(http.STATUS_CODES/*http的所有状态码，100左右表示即时通讯，200左右表示请求成功，300左右表示页面可能存在重定向，400左右表示浏览器可能发送了一些错误的请求，500左右表示服务器挂掉*/);
var express = require("express"),
	app = express();
app.use(urlencoded({
		extended : 1
	})/*此中间件将所有来自浏览器的请求中表单里的内容转换至req.body属性中方便获取*/)
	// express框架中的Router属性专做路由
	.use(require("./router")(express.Router()))
	.listen(2333, function(){
		console.log("Server started on port 2333");
	});