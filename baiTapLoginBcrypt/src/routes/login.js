const express = require('express');
const router = express.Router();
const regis = require('../app/controllers/regis.js');

const login = require('../app/controllers/login.js')

router.get('/', login.check)
router.post('/mainPage', login.show)
router.get('/register', regis.register)

module.exports = router;

