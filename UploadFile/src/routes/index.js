const path = require('path');
const fileController = require('../app/controllers/fileController')

//khai báo đối tượng upload 
const upload = require('../config/upload/upFile');

function route(app) {
  //upload.single('file') chỉ định chỉ up một file
  //đồng thời tên 'file' phải giống với tên của trường input name trên form
  app.post('/upload', upload.single('file'), fileController.up);
}

module.exports = route;