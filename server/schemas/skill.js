var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SkillSchema = new Schema({
	skillName:String,
	stars:Number
})


module.exports = SkillSchema