const passport = require('../config/passport');
const authController = require('../app/controllers/authController');

function route(app) {
    app.get('/', authController.home);

    app.get('/auth/google',
      passport.authenticate('google', { scope: ['profile', 'email'], prompt: 'select_account' })
    );

    app.get('/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/' }),
        authController.loginSuccess
    );

    app.get('/logout', authController.logout);
}

module.exports = route;
