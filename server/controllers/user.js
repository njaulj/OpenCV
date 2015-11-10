var mongoose = require('mongoose')
require('../models/user.js')
var User =mongoose.model('User') 
var  _ = require('lodash')
var eventproxy = require('eventproxy')


exports.query = function(req,res){

}

exports.insert = function(req,res){
	var _user = {
		chineseName:'刘君',
		englishName:'Jack Willson',
		job:'前端开发工程师'
	}
	var user = new User(_user)
	user.save(function(err,data){
		if(err){
			res.json(err)
		}else{
			res.json(data)
		}
	})
}

exports.update = function(req,res){
	
}

exports.delete = function(req,res){
	
}


exports.query_detail = function(req,res){
	
}