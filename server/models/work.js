var mongoose = require('mongoose')
var WorkSchema = require('../schemas/work')
var Work = mongoose.model('Work', WorkSchema)

module.exports = Work