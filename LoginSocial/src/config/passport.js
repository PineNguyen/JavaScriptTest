const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Cấu hình Google OAuth Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID, //Client ID từ Google Cloud
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, //Client Secret từ Google Cloud
    callbackURL: 'http://localhost:3000/auth/google/callback' //URL callback sau khi login
  },
  //Hàm callback khi google xác thực thành công
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile); //Trả về thông tin của user Google
  }
));

//Lưu user vào session
passport.serializeUser((user, done) => done(null, user));

//Lấy user từ session
passport.deserializeUser((obj, done) => done(null, obj));

module.exports = passport;
