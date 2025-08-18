require('dotenv').config();
const nodemailer = require('nodemailer');

class mailController {
    //Gửi email
    async send(req, res) {
        res.json(req.body);
        
        // Cấu hình transporter với Gmail SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.USER, //email đăng nhập
                pass: process.env.PASS //mật khẩu
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        
        //Gửi mail với thông tin từu request
        const info = await transporter.sendMail({
            from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_USER}>`,
            to: req.body.to, //Người nhận
            subject: req.body.subject, //Tiêu đề
            text: req.body.text, //Nội dung
        })
    
        console.log("Message sent: " + info.messageId); //In ra log id của email đã gửi
    }
}

module.exports = new mailController;