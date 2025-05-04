import e, { Request, Response } from 'express';
import { validationResult } from "express-validator";
import { register, login } from '../services/auth.service';

interface AuthenticatedRequest extends Request {
    user?: {
        id: string;
    };
}

const registerController = async (req: Request, res: Response): Promise<void> => {

    const error = validationResult(req);

    if (!error.isEmpty()) {
        res.status(400).json({
            "err": error.array(),
        });
        return
    }

    const user = req.body;

    await register(user).then((result) => {

        res.cookie("accessToken", result.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV ? true : false,
            maxAge: 15 * 60 * 1000, // 15 minutes
            sameSite: "strict",
        });

        res.cookie("refreshToken", result.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_EN ? true : false,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            sameSite: "strict",
        });

        res.status(201).json({
            message: result.message,
            userCredentials: {
                "user": {
                    "id": result.user.id,
                    "email": result.user.email,
                    "fullName": result.user.fullName,
                },
                "accessToken": result.accessToken,
                "refreshToken": result.refreshToken
            }
        });
    }).catch((err) => {
        res.status(500).json(
            {
                status: 500,
                message: "Register faild",
                error: err.message
            }
        );
    })

}

const loginController = async (req: Request, res: Response): Promise<void> => {

    const error = validationResult(req);

    if (!error.isEmpty()) {
        res.status(400).json({
            "err": error.array(),
        });
        return
    }

    const user = req.body;

    await login(req, user).then((result) => {

        res.cookie("accessToken", `Bearer ${result.accessToken}`, {
            httpOnly: true,
            secure: process.env.NODE_ENV ? true : false,
            maxAge: 15 * 60 * 1000, // 15 minutes
            sameSite: "strict",
        });

        res.cookie("refreshToken", `Bearer ${result.refreshToken}`, {
            httpOnly: true,
            secure: process.env.NODE_EN ? true : false,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            sameSite: "strict",
        });

        res.status(200).json({
            message: result.message,
            userCredentials: {
                "user": {
                    "id": result.user.id,
                    "email": result.user.email,
                    "fullName": result.user.fullName,
                },
                "accessToken": result.accessToken,
                "refreshToken": result.refreshToken,
            }
        });
    }).catch((err) => {
        res.status(500).json(
            {
                status: 500,
                message: "login faild",
                error: err.message
            }
        );
    })
}

const logutController = async (req: AuthenticatedRequest, res: Response): Promise<void> => {

}


export {
    registerController,
    loginController,
    logutController
}