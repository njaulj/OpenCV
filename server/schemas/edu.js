var mongoose = require('mongoose')
var Schema = mongoose.Schema

var EduSchema = new Schema({
	start_date:{type:String},
	end_date:{type:String},
	university:String,
	awards:String,
	studyType:String,
	UserId:{type:Schema.ObjectId,ref:'User'}
})


module.exports = EduSchema