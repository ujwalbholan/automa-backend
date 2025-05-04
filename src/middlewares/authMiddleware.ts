import e, { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { prisma } from "../db/prismaClient.db";
import { generateTokens } from "../utils/jwtTokens.util";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string;

export interface AuthenticatedRequest extends Request {
    userId?: string;
}

const authMiddleware = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const accessToken = req.cookies?.accessToken;
    const refreshToken = req.cookies?.refreshToken;

    if (!accessToken || !refreshToken) {
        return res.status(401).json({ error: "Missing tokens" });
    }

    try {
        const accessPayload = jwt.verify(accessToken, ACCESS_TOKEN_SECRET) as JwtPayload;
        req.userId = accessPayload.userId;
        return next();
    } catch (accessErr: any) {
        if (accessErr.name !== "TokenExpiredError") {
            return res.status(401).json({ error: "Access token is invalid or tampered" });
        }

        // Try refresh token
        try {
            const refreshPayload = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET) as JwtPayload;

            const user = await prisma.user.findUnique({
                where: { id: refreshPayload.userId },
            });

            if (!user || user.refreshToken !== refreshToken) {
                return res.status(403).json({ error: "Invalid refresh token or user mismatch" });
            }

            const { newAccessToken, newRefreshToken } = await generateTokens(user.email) as any;

            await prisma.user.update({
                where: { id: user.id },
                data: { refreshToken: newRefreshToken },
            });

            res.cookie("accessToken", `Bearer ${newAccessToken}`, {
                httpOnly: true,
                secure: process.env.NODE_ENV ? true : false,
                maxAge: 15 * 60 * 1000, 
                sameSite: "strict",
            });

            res.cookie("refreshToken", `Bearer ${newRefreshToken}`, {
                httpOnly: true,
                secure: process.env.NODE_EN ? true : false,
                maxAge: 7 * 24 * 60 * 60 * 1000, 
                sameSite: "strict",
            });

            req.userId = user.id;

            return next();
        } catch (refreshErr: any) {
            return res.status(403).json({ error: "Refresh token invalid or expired" });
        }
    }
};

export { authMiddleware }
