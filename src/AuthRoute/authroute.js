const express = require('express');
const router = express.Router();
const all = require('../controllers/all')
const user = require('../controllers/User')
const todo = require('../controllers/todo')


router.get('/Hello', all.Hello)
router.get('/a', all.name)
router.get('/user/:id', user.usershowid)
router.get('/userG', user.getusername)
router.get('/todo', todo.todoShow)

router.post('/user', user.username)
router.post('/todo', todo.todosave)

router.delete('/userD:id', user.Duser)

router.put('/userU:id', user.Uuser)

module.exports = router;
