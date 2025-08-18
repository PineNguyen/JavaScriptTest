const login = require('./login');
const { mongooseToObject } = require('../util/mongoose');
const User = require('./user')

function route(app) {
    app.use('/', login)
    app.use('/register', login)
    app.post('/saveAccount', User)
    app.post('/mainPage', login);  
}

module.exports = route;

