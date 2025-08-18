const bcrypt = require('bcrypt');
const verifyToken = require('../config/verify');
const controller = require('../app/controllers/verifyController');
const jwt = require('jsonwebtoken');

function route(app) {
    const users = [];
    const SECRET_KEY = 'supersecret123';
    
    app.post('/register', controller.register); 

    app.post('/login', controller.login);

    app.get('/profile', verifyToken, controller.profile);
}

module.exports = route;