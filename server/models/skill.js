var mongoose = require('mongoose')
var SkillSchema = require('../schemas/skill')
var Skill = mongoose.model('Skill', SkillSchema)

module.exports = Skill