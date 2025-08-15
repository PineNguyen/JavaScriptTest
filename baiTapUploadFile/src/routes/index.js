const path = require('path');
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/Images'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
const upload = multer({ storage: storage })

function route(app) {
  app.post('/upload', upload.single('file'), function (req, res, next) {
    // res.json(req.file)
    res.send(req.file);
  })
}

module.exports = route;