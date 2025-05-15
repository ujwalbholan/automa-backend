import { Router } from "express";
import { body } from 'express-validator';
import {
    registerController,
    loginController,
    logutController,
    forgotPasswordController,
    resetPasswordController
} from "../controllers/userAuth.controller";
import { authMiddleware } from "../middlewares/authMiddleware";


const authRoutes = Router();

//auth routes
authRoutes.route("/register").post(
    [
        body('email').isEmail().withMessage('invalid email'),
        body('fullName').isString().isLength({ min: 6 }).withMessage('full Name must be greater then 6 character'),
        body('password').isLength({ min: 6 }).withMessage('password must be greater then 6 character'),
    ],
    registerController
);

authRoutes.route("/login").post(
    [
        body('email').isEmail().withMessage('invalid email'),
        body('password').isLength({ min: 6 }).withMessage('password must be greater then 6 character'),
    ],
    loginController
);
authRoutes.route('/logout').post(logutController)
authRoutes.route('/resetPassword').post(resetPasswordController)
authRoutes.route('/forgotPassword').post(forgotPasswordController, [
    body('email').isEmail().withMessage('invalid email'),
])
authRoutes.route('/optCheck').post(forgotPasswordController, [
    body('email').isEmail().withMessage('invalid email'),
])

//oauth routes
import passport from 'passport';

authRoutes.route("/google").get(
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

authRoutes.route('/google/callback').get(
    passport.authenticate('google', { failureRedirect: '/login', failureMessage: true }),
    function (req, res) {
        res.redirect('/healthcheck');
    }
);



export { authRoutes } 
