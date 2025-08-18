const controller = require('../app/controllers/mailController');

function route(app) {
  app.post('/sendEmail', controller.send);
}

module.exports = route;
