const controller = require('../app/controllers/studentController');
const path = require('path');

function route(app) {
  //CRUD
  //Create
  app.post('/api/createStudent', controller.createStudent);

  //Read
  app.get('/api/showStudent', controller.showOneStudent);

  app.get('/api/showStudent/:id', controller.showAllStudent);

  //Update
  app.put('/api/editStudent/:id', controller.editStudent);

  //Delete
  app.delete('/api/deleteStudent/:id', controller.deleteStudent);
}

module.exports = route;