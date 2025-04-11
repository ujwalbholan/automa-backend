import { creatUser, getUserByEmail } from '../model/user.model'

const registerUser = async ( userData : any) => {
    const { email, password} = userData;

    const isEmailAlreadyExist = await getUserByEmail(email);

    if(isEmailAlreadyExist){
        throw new Error("Email already exists");
    }
    
    const hashedPassword = hashPassword(password);

}





export default registerUser;