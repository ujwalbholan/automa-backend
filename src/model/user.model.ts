import prisma from '../db/dbConnection'

interface user {
    id: number,
    email: String,
    password: String
}

const creatUser =  async ({ email, password} : user) => {
    return prisma.user.create({
        data:{
            email: email,
            password: password,
        }
    })
}

const getUserByEmail = async (email : String) => {
    return prisma.user.findUnique({
        where: {
            email: email,
        }
    })
} 

export default { creatUser , getUserByEmail}