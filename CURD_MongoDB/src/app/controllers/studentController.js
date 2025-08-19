//Khai báo model Student
const Student = require('../models/Student');

class studentController {
    //Tạo một đối tượng Student mới
    // thông tin của Student sẽ được lấy tại 'req.body'
    async createStudent(req, res, next) {
        try {
            await Student.create(req.body);
            res.status(201).json(req.body);
        } catch (error) {
            res.status(400).send("Please fill all information completely!");
        }
    }

    //Hiển thị tất cả Student trong cơ sở dữ liệu, 
    //sử dụng hàm find() để lấy tất cả các phần tử trong Student
    async showAllStudent(req, res, next) {
        try {
            const student = await Student.find();
            res.json(student);
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    //Tương tự showAll, nhưng chỉ hiển thị một Student có ID giống với request
    //Id sẽ được lấy thông qua 'req.params.id'
    async showOneStudent(req, res, next) {
        try {
            const student = await Student.findById(req.params.id);
            if(!student) return res.status(404).send("Không tìm thấy dữ liệu");
            res.json(student);
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

   //Hàm này sẽ cập nhật thông tin của Student mà người dùng yêu cầu
    //Hàm findByIdAndUpdate() sẽ lấy Student có cùng id req.params.id
    //sau đó cập nhật thông tin mới dựa trên req.body
    async editStudent(req, res, next) {
        try {
            const student = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if(!student) return res.status(404).send("Không tìm thấy dữ liệu");
            res.json(student);
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    //Hàm này sẽ xóa Student mà người dùng yêu cầu
    //Hàm findByIdAndDelete() sẽ xóa Student có Id giống req.params.id
    async deleteStudent(req, res, next) {
        try {
            const student = await Student.findByIdAndDelete(req.params.id);
            if(!student) return res.status(404).send("No data found");
            res.json({message: "Deleted successfully!"});
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }
}

module.exports = new studentController;