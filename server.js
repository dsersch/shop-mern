const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = process.env.PORT;
const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD);
const shopItemRouter = require('./routes/shopItemRouter.js');
const cardRouter = require('./routes/cardRouter.js');

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected...')
})

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/shop', shopItemRouter)
app.use('/cards', cardRouter)

app.get('/', (req, res) => {
    res.send('working...')
})

app.listen(PORT, err => {
    console.log(err || `App running on port ${PORT}...`)
})