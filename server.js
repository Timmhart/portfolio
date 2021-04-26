const port = process.env.PORT || 3000;
const host = process.env.PORT || 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const dotenv = require('dotenv').config();

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/public/test.html')
})

app.post('/', (req, res) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASS
        }
    })

    const mailOptions = {
        from: `${req.body.name}`,
        to: 'timhart13@live.nl',
        subject: `Subject from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error');
        }else {
            console.log('Email sent: ' + info.response);
            res.send('succes')
        }
    })
});

app.listen(port, host, () => {
    console.log(`Example app listening on port ${host} ${port}!`);
});