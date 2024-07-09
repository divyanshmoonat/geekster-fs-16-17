const express = require("express");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "localhost",
  port: "1025",
  secure: false,
});

const app = express();

app.get("/", (req, res) => {
  const mailOptions = {
    to: "divyansh@gmail.com",
    from: "do-not-reply@jobapp.com",
    subject: "Welcome to JobApp",
    // text: "Welcome to JobApp, search for your relavent job for free",
    html: `
    <html>
    <head></head>
    <body>
    <h1>Hi There,</h1>
    <h3>Welcome to job app </h3>
    <p style="color: blue;">lorem ipsum dor sit ametlorem ipsum dor sit ametlorem ipsum dor sit ametlorem ipsum dor sit ametlorem ipsum dor sit ametlorem ipsum dor sit ametlorem ipsum dor sit amet</p>
    <script>alert("hello");</script>
    </body>
    </html>
    `,
    // attachment: // File blob (File object)
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  res.json({ success: true, message: "Mail sent successfully" });
});

app.listen(10000, () => console.log(`Server is up and running at port 10000`));
