const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const cors = require('cors');
const connection = require('./config/db');

connection();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/products', require('./routes/products'));
app.use('/api/users', require('./routes/users'));
app.use('/api/transactions', require('./routes/transactions'));

app.all('*', (err, req, res, next) => {
    console.log(error)
})

app.listen(PORT, () => console.log('server started'));