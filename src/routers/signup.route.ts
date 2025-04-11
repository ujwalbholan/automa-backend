import express from 'express';
import { body } from 'express-validator';
import register from '../controllers/signup.controller';

const router = express.Router();

router.post('/signup',
    [
        body('email').isEmail().withMessage('invalid email'),
        body('password').isLength({ min: 6 }).withMessage('password must be greater then 6 character'),
    ],
    register
);


export default router;