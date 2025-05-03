import dotenv from 'dotenv';
dotenv.config();

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { prisma } from "../db/prismaClient.db";

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/api/v1/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await prisma.user.findUnique({
                where: { email: profile.emails?.[0].value || "" },
            });

            if (!user) {
                user = await prisma.user.create({
                    data: {
                        id: profile.id,
                        email: profile.emails?.[0].value || "",
                        fullName: profile.displayName,
                        password: "googleAuth",
                    },
                });
            }

            return done(null, user);
        } catch (error) {
            return done(error, null);
        }
    }
));

// Serialize user to store user ID in session
passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

// Deserialize user by ID and fetch user from DB
passport.deserializeUser(async (id: string, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { id } });
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

