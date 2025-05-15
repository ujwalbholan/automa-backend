import { Router } from "express";
import { body } from 'express-validator';
import { authMiddleware } from "../middlewares/authMiddleware";


const workflow = Router();

//workflow routes
// workflow.route('/workflows').post(  )
// workflow.route('/workflows/:id/execute').post(  )

// workflow.route("/workflows").get(
//     [
//         body('email').isEmail().withMessage('invalid email'),
//         body('fullName').isString().isLength({ min: 6 }).withMessage('full Name must be greater then 6 character'),
//         body('password').isLength({ min: 6 }).withMessage('password must be greater then 6 character'),
//     ],
    
// );

// workflow.route("/workflow/:id").get(
//     [
//         body('email').isEmail().withMessage('invalid email'),
//         body('password').isLength({ min: 6 }).withMessage('password must be greater then 6 character'),
//     ],
     
// );
// workflow.route('/workflow/:id').put( )
// workflow.route('/workflow/:id').delete( )





export { workflow } 
