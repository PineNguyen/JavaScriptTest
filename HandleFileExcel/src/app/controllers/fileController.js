const ExcelJS = require('exceljs');
const path = require('path');
const { fileURLToPath } = require('url');
const fs = require('fs');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class fileController {
    //Hàm đọc file
    async readFile(req, res) {
        try {
            //Nhận file excel upload từ client
            //Sau đó đọc nội dung file bằng ExcelJS
            const filePath = req.file.path;
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.readFile(filePath);

            //Lấy sheet đầu tiên của file
            const sheet = workbook.worksheets[0];
            const rows = [];

            //Duyệt qua từng dòng trong sheet và đưa giá trị các ô vào mảng
            sheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
                //row.values[0] luôn là null nên ta loại bỏ đi
                rows.push(row.values.slice(1)); 
            });

            //Xóa file excel tạm sau khi đọc xong
            fs.unlinkSync(filePath);

            res.json({ data: rows });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    //Hàm ghi file
    async writeFile(req, res) {
        try {
            //Nhận dữ liệu JSON từ body request
            const data = req.body;

            //Kiểm tra dữ liệu xem có rỗng hay không
            if (!Array.isArray(data) || data.length === 0) {
                return res.status(400).json({ error: 'Data must be a JSON array and not empty' });
            }

            //Tạo workbook mới và sheet "Data" 
            const workbook = new ExcelJS.Workbook();
            const sheet = workbook.addWorksheet('Data');

            //Tạo các header từ key của phần tử đầu tiên trong mảng JSON
            const headers = Object.keys(data[0]).map(key => ({ header: key, key: key, width: 20 }));
            sheet.columns = headers;

            //Thêm dữ liệu vào sheet
            sheet.addRows(data);

            //Ghi workbook ra file excel tạm
            const filePath = path.join(__dirname, 'output.xlsx');
            await workbook.xlsx.writeFile(filePath);

            //Cho client tải về file excel vừa tạo bằng res.download
            res.download(filePath, 'output.xlsx', (err) => {
                //Sau khi tải xong xóa file tạm
                if (!err) fs.unlinkSync(filePath);
            });

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new fileController;