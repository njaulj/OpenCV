var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SkillSchema = new Schema({
	skill_name:String,
	stars:Number,
	UserId:{type:Schema.ObjectId,ref:'User'}
})


module.exports = SkillSchema