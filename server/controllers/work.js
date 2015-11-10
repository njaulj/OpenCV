var mongoose = require('mongoose')
require('../models/user.js')
var User =mongoose.model('User') 
var  _ = require('lodash')
var eventproxy = require('eventproxy')


exports.query = function(req,res){

}

exports.insert = function(req,res){
	var _work = {
		start_date:req.body.start_date,
		end_date:req.body.end_date,
		position:req.body.position,
		highlights:req.body.highlights,
		company:req.body.company,
		UserId:'5641df73e70137bd082c266c'
	}
	console.log(_work)
	var work = new Work(_work)
	work.save(function(err,work){
		if(err){
			res.json(err)
		}else{
			res.json(work)
		}
	})
}

exports.update = function(req,res){
	
}

exports.delete = function(req,res){
	
}