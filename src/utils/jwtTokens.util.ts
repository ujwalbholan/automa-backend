import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// interface UserPayload {
//     id: string;
//     email: string;
//     fullName?: string;
// }

const generateRefreshToken = async (email: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const token = await bcrypt.hash(email + Date.now(), salt);
    return token;
};

const generateAccessToken = async (email: string): Promise<string> => {
    const token = jwt.sign(
        { email: email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '15m' }
    );
    return token;
};

const generateTokens = async (email: string): Promise<{
    accessToken: string;
    refreshToken: string;
}> => {
    const accessToken = await generateAccessToken(email);
    const refreshToken = await generateRefreshToken(email);
    return { accessToken, refreshToken };
};

export {
    generateAccessToken,
    generateRefreshToken,
    generateTokens
};
