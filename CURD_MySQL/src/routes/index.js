const path = require('path');
const controller = require('../app/controllers/studentController');

function route(app) {
    app.post('/api/create', controller.create);
  
    app.get('/api/read', controller.showOne);
  
    app.get('/api/read/:id', controller.showAll);
  
    app.put('/api/update/:id', controller.update);
  
    app.delete('/api/delete/:id', controller.delete);
}

module.exports = route;