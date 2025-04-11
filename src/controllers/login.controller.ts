import { validationResult } from "express-validator";


const register = ( req:any,res:any,next:any) => {
    try{

        const error = validationResult(req);
    } catch(err) {
        next(err);
    }
}


export default register;

