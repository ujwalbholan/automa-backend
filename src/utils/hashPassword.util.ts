import bcrypt from 'bcryptjs'

const hashPassword = async (password: string) : Promise<string> => {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword =bcrypt.hashSync(password, salt);
    return hashPassword;
}

const comparePassword = async (password: string, hashPassword: string) : Promise<boolean> => {
    const isMatch = await bcrypt.compare(password, hashPassword)
    return isMatch;
}

export { hashPassword , comparePassword }