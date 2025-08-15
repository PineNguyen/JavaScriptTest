const express = require('express');
const router = express.Router();
const regis = require('../app/controllers/regis.js');

router.post('/saveAccount', regis.saveUser)

module.exports = router;

