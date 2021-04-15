const port = 3000;
const express = require('express');
const app = express();
const nodemailer = require("nodemailer");

app.use(express.static('public'));
app.use(express.json());

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
            user: 'timmhart1@gmail.com',
            pass: 'Pieter16'
        }
    })

    const mailOptions = {
        from: req.body.email,
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});