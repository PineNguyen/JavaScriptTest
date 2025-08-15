const path = require('path');
const pool = require('../config/db')

function route(app) {

  app.post('/api/create', async (req, res) => {
    const {name, email, age} = req.body;
    try {
      const [result] = await pool.query(
        "INSERT INTO students (name, email, age) VALUES (?, ?, ?)",
        [name, email, age]
      );
      res.status(201).json({id: result.insertID, name, email, age});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  })

  app.get('/api/read', async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM students");
      res.json(rows);
    } catch (error) {
      res.status(500).send({message: error.message});
    }
  })

  app.get('/api/read/:id', async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM students WHERE id = ?", [req.params.id]);
      if(rows.length === 0) return res.status(404).send("Không tìm thấy dữ liệu");
      res.json(rows[0]);
    } catch (error) {
      res.status(400).send({message: error.message});
    }
  })

  app.put('/api/update/:id', async (req, res) => {
    const {name, email, age} = req.body;
    try {
      const [result] = await pool.query(
        "UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?", [name, email, age, req.params.id]
      );
      if(result.effectedRows === 0) return res.status(404).send("Không tìm thấy dữ liệu");
      res.json({id: req.params.id, name, email, age});
    } catch (error) {
      res.status(500).send({message: error.message});
    }
  })

  app.delete('/api/delete/:id', async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM students WHERE id = ?", [req.params.id]);
      if(result.effectedRows === 0) return res.status(404).send("Không tìm thấy dữ liệu");
      res.json({message: "Đã xóa thành công!"});
    } catch (error) {
      res.status(500).send({message: error.message});
    }
  })
}

module.exports = route;