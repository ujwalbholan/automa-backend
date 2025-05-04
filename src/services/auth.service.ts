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

export interface LoginUserInput {
    accessToken: string;
    refreshToken: string;
}

interface LogoutUserInput {
    message: string;
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

const login = async (user: RegisterUserInput): Promise<RegisterResult> => {
    try {
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

const logout = async (token: LoginUserInput): Promise<LogoutUserInput> => {
    try {
        const { refreshToken } = token;

        const user = await prisma.user.findFirst({
            where: {
                refreshToken: refreshToken,
            },
        });

        if (user) {
            await prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    refreshToken: null
                },
            });
        }

        return { message: "User logged out successfully" };
    } catch (err) {
        throw new Error("Error logging out user: " + err.message);
    }
}

export {
    register,
    login,
    logout,
};