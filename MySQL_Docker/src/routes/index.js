const path = require('path');

function route(app) {
  app.use('/', (req, res) => {
    res.send("Chạy MySQL với Docker")
  })
}

module.exports = route;