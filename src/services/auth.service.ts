import { generateTokens } from "../utils/jwtTokens.util";
import { prisma } from "../db/prismaClient.db";
import { hashPassword } from '../utils/hashPassword.util';
import { ApiError } from "../utils/apiError.util";
import { comparePassword } from '../utils/hashPassword.util'

interface RegisterUserInput {
    email: string;
    fullName: string;
    password: string;
}

interface RegisterResult {
    message: string;
    user: {
        email: string;
        fullName: string;
        id: string;
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
    })

    if (existingUser) {
        throw new Error("User already exists with this email");
    }

    const hashedPassword = await hashPassword(password);

    const { accessToken, refreshToken } = await generateTokens(user.email);

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
        throw new ApiError(500, err.message);
    }

}

const login = async (user: RegisterUserInput): Promise<RegisterResult> => {
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

    const { accessToken, refreshToken } = await generateTokens(existingUser.email);



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
}

const logout = async (userId: string): Promise<void> => {

}
export {
    register,
    login,
    logout,
};