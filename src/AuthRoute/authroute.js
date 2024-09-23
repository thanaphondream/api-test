const express = require('express');
const router = express.Router();
const all = require('../controllers/all')
const user = require('../controllers/User')


router.get('/Hello', all.Hello)
router.get('/a', all.name)
router.get('/userG', user.getusername)

router.post('/user', user.username)

router.delete('/userD:id', user.Duser)

router.put('/userU:id', user.Uuser)

module.exports = router;
