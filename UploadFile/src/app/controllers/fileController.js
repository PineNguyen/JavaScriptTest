class fileController {
    //Sau khi upload thì file sẽ được lưu về folder Image 
    up(req, res, next) {
        //Ta sẽ in req.file ra để xem thông tin file được upload lên
        res.send(req.file);
    }
}

module.exports = new fileController;