import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'

import signupRoute from './routers/signup.route'


const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (_, res) => {
    res.send("welcome to automa");
});

// app.use('/health',(req, res) => {

// })

//login signup routes
app.use('/users', signupRoute)



export default app;
