
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/contact', (req, res) => {
    res.render('contact',
        {
        title: 'EJS Contact Form',
    });
});

app.post('/contact', (req, res) => {
console.log('Form Data:', req.body);
res.render('contact-success',{
        title: 'EJS Contact Form',
        formData: req.body
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});