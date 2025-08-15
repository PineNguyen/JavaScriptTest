const nodemailer = require('nodemailer');

function route(app) {
  app.post('/sendEmail', async (req, res) => {
    // const html = `
    // <h1>Hello World</h1>
    // `;
    res.json(req.body);

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'anon.kysudoitoi@gmail.com',
        pass: 'abgf azod fuez akkt'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const info = await transporter.sendMail({
      from: 'anon.kysudoitoi <anon.kysudoitoi@gmail.com>',
      // to: 'thongminhnguyenhuu@gmail.com',
      // subject: 'Testing',
      // text: 'Đây là email test!',
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.text,
    })

    console.log("Message sent: " + info.messageId);

  })
}
module.exports = route;
