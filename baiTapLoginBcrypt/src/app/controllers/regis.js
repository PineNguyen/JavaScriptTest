const accounts = require('../models/account')

class regis {
    register(req, res) {
        res.render('regis')
    }

    saveUser(req, res) {
        const user = new accounts({
            account: req.body.account,
            pass: req.body.pass
        });

        user.save()
            .then(() => {
                res.redirect('/');
            })
            .catch(err => {
                console.error('Error saving object:', err);
            });
    }
}

module.exports = new regis;