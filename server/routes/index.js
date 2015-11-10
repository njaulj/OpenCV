var express = require('express');
var router = express.Router();
var user = require('../controllers/user')
var edu = require('../controllers/edu')
var work = require('../controllers/work')
var skill = require('../controllers/skill')
var contact = require('../controllers/contact')


/* GET home page. */
router.get('/api/user/insert', user.insert);
router.get('/api/edu/insert', edu.insert);
router.get('/api/work/insert', work.insert);
router.get('/api/skill/insert', skill.insert);
router.get('/api/contact/insert', contact.insert);


router.get('/api/user/query', user.query);
router.get('/api/edu/query', edu.query);
router.get('/api/work/query', work.query);
router.get('/api/skill/query', skill.query);
router.get('/api/contact/query', contact.query);

module.exports = router;
