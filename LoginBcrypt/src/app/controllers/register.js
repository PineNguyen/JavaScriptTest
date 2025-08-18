const accounts = require('../models/account')

//Đăng ký tài khoản
class regis {
    //Khi chọn đăng ký sẽ chuyển sang giao diện đăng ký
    register(req, res) {
        res.render('regis')
    }

    //Lưu tài khoản
    saveUser(req, res) {
        //Lấy tài khoản mật khẩu của người dùng nhập từ req.body
        const user = new accounts({
            account: req.body.account,
            pass: req.body.pass
        });

        //Lưu user
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