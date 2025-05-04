import jwt from 'jsonwebtoken';

export interface UserPayload {
    email: string;
    fullName?: string;
}

const generateRefreshToken = async (email: string, fullName: string): Promise<string> => {
    const token = jwt.sign(
        {
            email: email,
            fullName: fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '7d' }
    );
    return token;
};

const generateAccessToken = async ( email: string, fullName: string): Promise<string> => {
    const token = jwt.sign(
        {
            email: email,
            fullName: fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '15m' }
    );
    return token;
};

const generateTokens = async (user: UserPayload): Promise<{
    accessToken: string;
    refreshToken: string;
}> => {
    const accessToken = await generateAccessToken( user.email, user.fullName);
    const refreshToken = await generateRefreshToken(user.email, user.fullName);
    return { accessToken, refreshToken };
};

export {
    generateAccessToken,
    generateRefreshToken,
    generateTokens
};
