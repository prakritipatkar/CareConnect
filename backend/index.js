const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5700;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'prakritipatkar2204@gmail.com', // replace with your email
        pass: 'iefwyibpfdqdaheb'   // replace with your email password or an app-specific password
    },
    debug: true, // Enable debugging
    logger: true // Logger option to log information in console
});

app.post('/send-email', (req, res) => {
    const { doctorName, timeSlot, userEmail } = req.body;

    const mailOptions = {
        from: 'prakritipatkar2204@gmail.com', // replace with your email
        to: userEmail,
        subject: 'Appointment Confirmation',
        text: `Your appointment with Dr. ${doctorName} is confirmed for ${timeSlot}.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email: ' + error.toString());
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent: ' + info.response);
    });
    
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
