import jwt from 'jsonwebtoken';

const isRefreshTokenExpired = (refreshToken: string): boolean => {
    try {
        const decoded: any = jwt.decode(refreshToken);

        if (!decoded || !decoded.exp) {
            return true;
        }

        const currentTimestamp = Date.now() / 1000;
        return decoded.exp < currentTimestamp;
    } catch (err) {
        return true;
    }
};

export { isRefreshTokenExpired }
