const path = require('path');

//Khai báo thư viện Multer có chức năng upload file
const multer  = require('multer');

//Khai báo storage (lưu trữ trên ổ đĩa, tại foler Images)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/Images'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

module.exports = upload;
