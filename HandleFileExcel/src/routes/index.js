const upload = require('../config/multerConfig')
const fileController = require('../app/controllers/fileController')

function route(app) {
    app.post('/read-excel', upload.single('file'), fileController.readFile);

    app.post('/write-excel', fileController.writeFile);
}

module.exports = route;