import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import passport from "passport";
import session from "express-session";

// important thing 
import "../src/controllers/oauth.controller";

const app = express();

// express Middlewares
app.use(cors());
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({ extended: true , limit:"16kb" }))
// app.use(express.static("public"))
app.use(cookieParser())

app.use(session({ secret: "yourSecret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes 
app.get('/healthcheck', (_req, res) => {
  res.send("automa Backend is up and running!!!!!!");
});

//api routes
import { authRoutes } from './routes/auth.route';

app.use('/api/v1/auth', authRoutes);



export default app;
