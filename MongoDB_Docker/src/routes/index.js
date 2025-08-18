const path = require('path');

function route(app) {
  app.use('/', (req, res) => {
    res.send("Chạy MongoDB với Docker")
  })
}

module.exports = route;