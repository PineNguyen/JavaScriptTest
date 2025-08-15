import express from 'express';
import multer from 'multer';
import ExcelJS from 'exceljs';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const upload = multer({ dest: path.join(__dirname, 'uploads') });

app.post('/read-excel', upload.single('file'), async (req, res) => {
  try {
    const filePath = req.file.path;
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const sheet = workbook.worksheets[0];
    const rows = [];

    sheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
      rows.push(row.values.slice(1)); 
    });

    fs.unlinkSync(filePath);

    res.json({ data: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/write-excel', async (req, res) => {
  try {
    const data = req.body;

    if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ error: 'Dữ liệu phải là mảng JSON và không rỗng' });
    }

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Data');

    const headers = Object.keys(data[0]).map(key => ({ header: key, key: key, width: 20 }));
    sheet.columns = headers;

    sheet.addRows(data);

    const filePath = path.join(__dirname, 'output.xlsx');
    await workbook.xlsx.writeFile(filePath);

    res.download(filePath, 'output.xlsx', (err) => {
      if (!err) fs.unlinkSync(filePath);
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server đang chạy tại http://localhost:3000');
});
