require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const authRoutes = require('./routes/authRoutes');
const route = require('./routes')
const PORT = 3000;

const app = express();

app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

route(app);

app.listen(PORT, () => {
    console.log('Server running at http://localhost:3000');
});
