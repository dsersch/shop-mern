const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = process.env.PORT;
const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected...')
})

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('working...')
})

app.listen(PORT, err => {
    console.log(err || `App running on port ${PORT}...`)
})