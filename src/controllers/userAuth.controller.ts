import { NextFunction, Request, Response } from 'express';
import { validationResult } from "express-validator";
import {
    register,
    login,
    logout,
    forgotPassword,
    resetPassword
} from '../services/auth.service'
import { LoginUserInput } from '../services/auth.service';
import { AuthenticatedRequest } from '../middlewares/authMiddleware';


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

        res.status(201).json({
            message: result.message,
            userCredentials: {
                "user": {
                    "id": result.user.id,
                    "email": result.user.email,
                    "fullName": result.user.fullName,
                },
                "accessToken": `Bearer ${result.accessToken}`,
                "refreshToken": `Bearer ${result.refreshToken}`,
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
    const accessToken = req.cookies?.accessToken;
    const refreshToken = req.cookies?.refreshToken;

    await login(user).then((result) => {

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

        res.status(200).json({
            message: result.message,
            userCredentials: {
                "user": {
                    "id": result.user.id,
                    "email": result.user.email,
                    "fullName": result.user.fullName,
                },
                "accessToken": accessToken || result.accessToken,
                "refreshToken": refreshToken || result.refreshToken,
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

const logutController = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {

    const refreshToken = req.cookies?.refreshToken;
    const accessToken = req.cookies?.accessToken;
    const token: LoginUserInput = { accessToken, refreshToken };

    console.log("token", token);

    if (!refreshToken) {
        res.status(400).json({ status: 401, message: "Logged out successfully" });
        return;
    }

    await logout(token).then((result) => {
        res.clearCookie("accessToken", { httpOnly: true, secure: true, sameSite: "strict" });
        res.clearCookie("refreshToken", { httpOnly: true, secure: true, sameSite: "strict" });

        res.status(200).json({
            message: result.message,
        });

    }).catch((err) => {
        res.status(500).json(
            {
                status: 500,
                message: "logout faild",
                error: err.message
            }
        );
    });
}

const resetPasswordController = async (req: Request, res: Response): Promise<void> => {

    res.status(200).json({
        message: "Reset password functionality not implemented yet",
    });
}

const forgotPasswordController = async (req: Request, res: Response): Promise<void> => {

    const error = validationResult(req);

    if (!error.isEmpty()) {
        res.status(400).json({
            "err": error.array(),
        });
        return
    }
    const { email } = req.body

    await forgotPassword(email).then((result) => {

    }).catch((error) => {

    });

    res.status(200).json({
        message: "Reset password functionality not implemented yet",
    });
}


export {
    registerController,
    loginController,
    logutController,
    resetPasswordController,
    forgotPasswordController
}