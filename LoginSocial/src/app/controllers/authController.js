class authController {
    //Hiển thị trang chủ, với link Login
    home (req, res) {
        res.send('<a href="/auth/google">Login with Google</a>');
    }

    //Khi login thành công sẽ in ra lời chào cùng với tên và email của user
    loginSuccess(req, res) {
        res.send(`
            Hello ${req.user.displayName}, Email: ${req.user.emails[0].value}
            <a href="/logout">Logout</a>
        `);
    }

    //Khi logout sẽ quay trở lại trang chủ ban đầu
    logout(req, res, next) {
        req.logout(function(err) {
            if (err) return next(err);
            req.session.destroy(() => res.redirect('/'));
        });
    }
}

module.exports = new authController;
