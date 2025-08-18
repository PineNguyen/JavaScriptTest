const bcrypt = require('bcrypt')

//Đăng nhập 
class login {
    //Khi đăng nhập sẽ chuyển sang giao diện đăng nhập
    check(req, res) {
        res.render('login')
    }

    //Kiểm tra tài khoản mật khẩu của User
    show(req, res, next) {
        const account = req.body.account;
        const pass = req.body.pass;

        if (account && pass) {
            const accounts = require('../models/account');
            accounts.findOne({account: account})
                .then(user => {
                    
                    //So sánh mật khẩu mã hóa, nếu đúng thì chuyển sang mainPage
                    if(bcrypt.compareSync(pass, user.toObject().pass)) {
                        res.render('mainPage');
                    }
                    else {
                        res.send("Account or Password is wrong!!!")
                    }
                })
                .catch(next);
        }
        else {
            res.send("Please input account and password!!!")
        }
    }
}

module.exports = new login;