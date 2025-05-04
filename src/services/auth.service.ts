import { Request, Response } from "express";
import { generateTokens } from "../utils/jwtTokens.util";
import { prisma } from "../db/prismaClient.db";
import { hashPassword } from '../utils/hashPassword.util';
import { comparePassword } from '../utils/hashPassword.util'

interface RegisterUserInput {
    email: string;
    fullName: string;
    password: string;
}

interface RegisterResult {
    message: string;
    user: {
        id: string;
        email: string;
        fullName: string;
    };
    accessToken: string;
    refreshToken: string;
}

const register = async (user: RegisterUserInput): Promise<RegisterResult> => {
    const { email, fullName, password } = user;

    const existingUser = await prisma.user.findUnique({
        where: {
            email: email as string
        }
    });


    if (existingUser) {
        throw new Error("User already exists with this email");
    }

    const hashedPassword = await hashPassword(password);

    const { accessToken, refreshToken } = await generateTokens({
        email: user.email,
        fullName: user.fullName
    });

    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                fullName,
                password: hashedPassword,
                refreshToken: refreshToken,
            },
        });

        return {
            message: "User registered successfully",
            user: {
                email: newUser.email,
                fullName: newUser.fullName,
                id: newUser.id,
            },
            accessToken: accessToken,
            refreshToken: refreshToken,
        };
    } catch (err) {
        throw new Error("Error registering user: " + err.message);
    }

}

const login = async (req: Request, user: RegisterUserInput): Promise<RegisterResult> => {
    const { email, password } = user;

    const existingUser = await prisma.user.findUnique({
        where: {
            email: email as string
        }
    });
    
    if (!existingUser || existingUser.email !== email) {
        throw new Error("User not found with this email");
    }

    const isPasswordValid = await comparePassword(password, existingUser.password);
    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }

    try {
        let accessToken: string;
        let refreshToken: string;

        const RToken = req.cookies?.refreshToken.split[' '][1];
        const AToken = req.cookies?.accessToken.split[' '][1];

        RToken.split[' '][1];
        AToken.split[' '][1];

        console.log("RToken", RToken);
        console.log("AToken", AToken);

        if (RToken && RToken === existingUser.refreshToken) {
            // Reuse tokens
            refreshToken = RToken;
            accessToken = AToken;
        } else {

            const { accessToken, refreshToken } = await generateTokens({
                email: user.email,
                fullName: user.fullName
            });

            await prisma.user.update({
                where: {
                    id: existingUser.id,
                },
                data: {
                    refreshToken: refreshToken,
                },
            });
        }

        return {
            message: "User logged in successfully",
            user: {
                email: existingUser.email,
                fullName: existingUser.fullName,
                id: existingUser.id,
            },
            accessToken: accessToken,
            refreshToken: refreshToken,
        };
    } catch (err) {
        throw new Error("Error registering user: " + err.message);
    }
}

const logout = async (userId: string): Promise<void> => {

}

export {
    register,
    login,
    logout,
};