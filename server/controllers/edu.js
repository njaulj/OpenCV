var mongoose = require('mongoose')
require('../models/edu.js')
var Edu =mongoose.model('Edu') 
var  _ = require('lodash')
var eventproxy = require('eventproxy')


exports.insert = function(req,res){
	var _edu = {
		start_date:req.body.start_date,
		end_date:req.body.end_date,
		studyType:req.body.studyType,
		awards:req.body.awards,
		university:req.body.university,
		UserId:'5641df73e70137bd082c266c'
	}
	console.log(_edu)
	var edu = new Edu(_edu)
	edu.save(function(err,edu){
		if(err){
			res.json(err)
		}else{
			res.json(edu)
		}
	})
}

exports.query = function(req,res){
	Edu
	.findOne({university:'南京农业大学'})
	.then(function(data){
		res.json(data)
	})
}

exports.delete = function(req,res){

}

exports.update = function(req,res){

}