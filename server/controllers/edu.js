var mongoose = require('mongoose')
require('../models/edu.js')
var Edu =mongoose.model('Edu') 
var  _ = require('lodash')
var eventproxy = require('eventproxy')


exports.insert = function(req,res){
	var _edu = {
		start_date:'2010.06',
		end_date:'2015.05',
		studyType:'学士',
		awards:'1等奖,3等奖',
		university:'南京农业大学',
		UserId:'564194a654bda3c904b1bca8'
	}
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