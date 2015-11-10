var mongoose = require('mongoose')
require('../models/skill.js')
var Skill =mongoose.model('Skill') 
var  _ = require('lodash')
var eventproxy = require('eventproxy')


exports.query = function(req,res){

}

exports.insert = function(req,res){
	var _skill = {
		skill_name:req.body.skill_name,
		stars:req.body.stars,
		UserId:'5641df73e70137bd082c266c'
	}
	console.log(_skill)
	var skill = new Skill(_skill)
	skill.save(function(err,skill){
		if(err){
			res.json(err)
		}else{
			res.json(skill)
		}
	})
}

exports.update = function(req,res){
	
}

exports.delete = function(req,res){
	
}