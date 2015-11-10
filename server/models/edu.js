var mongoose = require('mongoose')
var EduSchema = require('../schemas/edu')
var Edu = mongoose.model('Edu', EduSchema)

module.exports = Edu