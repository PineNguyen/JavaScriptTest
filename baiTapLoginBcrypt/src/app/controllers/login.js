const bcrypt = require('bcrypt')

class login {
    check(req, res) {
        res.render('login')
    }

    show(req, res, next) {
        const account = req.body.account;
        const pass = req.body.pass;

        if (account && pass) {
            const accounts = require('../models/account');
            accounts.findOne({account: account})
                .then(user => {
                    
                    if(bcrypt.compareSync(pass, user.toObject().pass)) {
                        res.render('mainPage');
                        // console.log("Mật khẩu đúng");
                    }
                    else {
                        res.send("Sai tài khoản hoặc mật khẩu !!!")
                    }
                })
                .catch(next);
        }
        else {
            res.send("Nhập tài khoản và mật khẩu !!!")
        }
    }
}

module.exports = new login;