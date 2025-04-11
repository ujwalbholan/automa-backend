import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);  
    return bcrypt.hash(password,salt);
}

const comparePassword = async (password : string) => {
    return await bcrypt.compare(password, password);
}

const generateRefreshToken = () => {
    
}

