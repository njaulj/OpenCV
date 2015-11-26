require('tingyun');
var express = require('express')
var app = express()
var fs = require('fs')

app.use(express.static('./app'))


app.set('Access-Control-Allow-Origin','*')

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");

})

app.get('/ioniccss',function(req,res){
	fs.exists('./mall/night/css/ionic.css',function(exists){
		if(exists){
			// fs.readFile('./mall/night/css/ionic.css',function(err,data){
			// 	res.send(data)
			// })
			res.sendFile(__dirname+'/mall/night/css/ionic.css')
		}else{
			console.log('缺少css文件或者文件目录不正确')
		}
	})
})

app.listen(3000)