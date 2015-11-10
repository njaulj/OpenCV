var mongoose = require('mongoose')
require('../models/contact.js')
var Contact =mongoose.model('Contact') 
var  _ = require('lodash')
var eventproxy = require('eventproxy')


exports.query = function(req,res){

}

exports.insert = function(req,res){
	var _contact = {
		email:req.body.email,
		github:req.body.;github,
		website:req.body.website,
		linkin:req.body.linkin,
		qq:req.body.qq,
		weibo:req.body.weibo,
		UserId:'5641df73e70137bd082c266c'
	}
	console.log(_contact)
	var contact = new Contact(_contact)
	contact.save(function(err,contact){
		if(err){
			res.json(err)
		}else{
			res.json(contact)
		}
	})
}

exports.update = function(req,res){
	
}

exports.delete = function(req,res){
	
}