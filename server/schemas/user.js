var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
	chineseName:{type:String},
	englishName:{type:String},
	job:{type:String},
	intro:String
})


module.exports = UserSchema