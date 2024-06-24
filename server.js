const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
    const aadharNumber = req.body.aadharNumber;
    const otp = req.body.otp;
    
    if (aadharNumber === '123456789012' && otp === '1234') {
        res.send('Login successful!');
    } else {
        res.send('Invalid Aadhaar number or OTP.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
