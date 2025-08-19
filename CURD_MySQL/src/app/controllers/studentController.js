//khai báo pool có chức năng thực thi truy vấn SQL với cơ sở dữ liệu MySQL
const pool = require('../config/db');

class studentController {
    //Thêm một đối tượng Sinh viên mới
    // thông tin của Student sẽ được lấy tại 'req.body' dưới dạng JSon
    async createStudent(req, res, next) {
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
    }

    //Hiển thị tất cả Student trong cơ sở dữ liệu
    // sử dụng truy vấn SELECT * để lấy tất cả Student trong bảng
    async showAllStudent(req, res, next) {
        try {
            const [rows] = await pool.query("SELECT * FROM students");
            res.json(rows);
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    //Tương tự showAll, nhưng chỉ hiển thị một Student có ID giống với request
    //sử dụng truy vấn SELECT * với điều kiện WHERE id = req.params.id
    async showOneStudent(req, res, next) {
        try {
            const [rows] = await pool.query("SELECT * FROM students WHERE id = ?", [req.params.id]);
            if(rows.length === 0) return res.status(404).send("Không tìm thấy dữ liệu");
            res.json(rows[0]);
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    //Hàm này sẽ cập nhật thông tin của Student mà người dùng yêu cầu
    //Sử dụng truy vấn UPDATE để cập nhật thông tin mới mà người dùng yêu cầu trong req.body
    async editStudent(req, res, next) {
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
    }

    //Hàm này sẽ xóa Student mà người dùng yêu cầu
    //Sử dụng truy vấn DELETE để xóa Student có Id giống req.params.id trong bảng Student
    async deleteStudent(req, res, next) {
        try {
            const [result] = await pool.query("DELETE FROM students WHERE id = ?", [req.params.id]);
            if(result.effectedRows === 0) return res.status(404).send("Không tìm thấy dữ liệu");
            res.json({message: "Đã xóa thành công!"});
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }
}

module.exports = new studentController;