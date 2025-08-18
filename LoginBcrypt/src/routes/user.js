const express = require('express');
const router = express.Router();
const regis = require('../app/controllers/register.js');

router.post('/saveAccount', regis.saveUser)

module.exports = router;

