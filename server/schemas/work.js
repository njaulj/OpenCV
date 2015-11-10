var mongoose = require('mongoose')
var Schema = mongoose.Schema

var WorkSchema = new Schema({
	start_date:{type:Date},
	end_date:{type:Date},
	company:String,
	highlights:String,
	position:String,
	UserId:{type:Schema.ObjectId,ref:'User'}
})


module.exports = WorkSchema