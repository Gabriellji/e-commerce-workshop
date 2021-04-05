require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const userRouter = require('./resources/user/user.router'); //register
const authRouter = require('./resources/user/auth.router'); // login + get loged in user

app.use(express.json());

app.use(cors());

app.use('/', (req, res, next) => {
    if(req.originalUrl === '/') {
        res.json({ message: 'Server is running! <3'});
        return;
    }
    next();
});

app.use('/register', userRouter);
app.use('/auth', authRouter);

module.exports = app;
