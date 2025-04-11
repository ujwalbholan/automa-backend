import express from 'express';
import { body } from 'express-validator';
import registerController from '../controllers/login.controller';

const router = express.Router();

router.post('/login',
    [
        body('email').isEmail().withMessage('invalid email'),
        body('fullName').isString().isLength({ min: 3 }).withMessage('full Name must be greater then 3 charaters'),
        body('password').isLength({ min: 6 }).withMessage('password must be greater then 6 character'),
    ],
    // registerController.register
)


export default router;