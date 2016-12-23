var readFile = require("fs").readFile;
function _readFile(path, callback){
	
	readFile(path, "utf-8", function(err, file){
		callback(err ? "读取页面失败" : file);
	});
}



module.exports=function(router){
	router.route('/index')
		.get(function(req,res){
			_readFile('../index.html',res.end.bind(res));
		})
		
		return router;
		
};
