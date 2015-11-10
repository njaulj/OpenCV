var express = require('express');
var router = express.Router();
var user = require('../controllers/user')
var edu = require('../controllers/edu')
var work = require('../controllers/work')
var skill = require('../controllers/skill')
var contact = require('../controllers/contact')


/* GET home page. */
router.post('/api/user/insert', user.insert);
router.post('/api/edu/insert', edu.insert);
router.post('/api/work/insert', work.insert);
router.post('/api/skill/insert', skill.insert);
router.post('/api/contact/insert', contact.insert);


router.get('/api/user/query', user.query);
router.get('/api/edu/query', edu.query);
router.get('/api/work/query', work.query);
router.get('/api/skill/query', skill.query);
router.get('/api/contact/query', contact.query);

module.exports = router;
