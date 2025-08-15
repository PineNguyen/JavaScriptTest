const path = require('path');

function route(app) {
  const Student = require('../app/models/Student');

  app.post('/api/create', async (req, res) => {
    try {
      await Student.create(req.body);
      res.status(201).json(req.body);
    } catch (error) {
      res.status(400).send("Hãy nhập đầy đủ dữ liệu!");
    }
  })

  app.get('/api/read', async (req, res) => {
    try {
      const student = await Student.find();
      res.json(student);
    } catch (error) {
      res.status(500).send({message: error.message});
    }
  })

  app.get('/api/read/:id', async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      if(!student) return res.status(404).send("Không tìm thấy dữ liệu");
      res.json(student);
    } catch (error) {
      res.status(400).send({message: error.message});
    }
  })

  app.put('/api/update/:id', async (req, res) => {
    try {
      const student = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});
      if(!student) return res.status(404).send("Không tìm thấy dữ liệu");
      res.json(student);
    } catch (error) {
      res.status(500).send({message: error.message});
    }
  })

  app.delete('/api/delete/:id', async (req, res) => {
    try {
      const student = await Student.findByIdAndDelete(req.params.id);
      if(!student) return res.status(404).send("Không tìm thấy dữ liệu");
      res.json({message: "Đã xóa thành công!"});
    } catch (error) {
      res.status(500).send({message: error.message});
    }
  })
}

module.exports = route;