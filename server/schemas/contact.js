var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ContactSchema = new Schema({
	email:{type:String},
	github:{type:String},
	linkin:{type:String},
	qq:String,
	weibo:String,
	website:String,
	mobile:String,
	UserId:{type:Schema.ObjectId,ref:'User'}
})


module.exports = ContactSchema