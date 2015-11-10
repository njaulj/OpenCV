var mongoose = require('mongoose')
var Schema = mongoose.Schema

var WorkSchema = new Schema({
	start_date:{type:String},
	end_date:{type:String},
	company:String,
	highlights:String,
	position:String,
	UserId:{type:Schema.ObjectId,ref:'User'}
})


module.exports = WorkSchema