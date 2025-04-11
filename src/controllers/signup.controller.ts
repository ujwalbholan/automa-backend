import { validationResult } from "express-validator";
import registerUser from "../services/signup.service";


const register = ( req:any,res:any,next:any) => {
    try{
        const error = validationResult(req);
        console.log(req.body);

        if(!error.isEmpty()){
            return res.status(400).json({ error: error.array()})
        }

        try{
            registerUser(req.body).then((Result:any) => {
                if(!Result){
                    return res.status(400).json({ message: "user not created"});
                }
                return res.status(200).json({ message: "user created successfully"});
            })
        }catch(err){
            return next(err);
        }

    } catch(err) {
        next(err);
    }
}


export default register;