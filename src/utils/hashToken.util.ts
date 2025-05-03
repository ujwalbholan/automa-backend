import bcrypt from 'bcryptjs';

const hashToken = async(token : string): Promise<string> => {
    const salt = bcrypt.genSaltSync(10);
    const hashToken = bcrypt.hashSync(token, salt);
    return hashToken;
}

export { hashToken}