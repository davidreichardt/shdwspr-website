import express, { Request, response, Response } from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as DiscordStrategy, Profile } from 'passport-discord';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, "../../.env");
console.log("Loading .env from:", envPath);
dotenv.config({ path: envPath });

const app = express();

//enable cors for frontend requests
app.use(cors({ origin: 'http://localhost:5173', credentials: true}));

//session middleware
app.use(
    session({
        secret: process.env.SESSION_SECRET as string,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);

//passport setup
passport.use(
    new DiscordStrategy(
        {
            clientID: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
            callbackURL: process.env.DISCORD_REDIRECT_URI as string,
            scope: ["identify"],
        },
        (accessToken: string, refreshToken: string, profile: Profile, done) => {
            return done(null, profile);
        }
    )
);

//store user in session
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//auth routes
app.get("/auth/discord", passport.authenticate("discord"));

app.get(
    "/auth/callback",
    passport.authenticate("discord", { failureRedirect: "/" }),
    (req: Request, res: Response) => {
        res.redirect("/dashboard");
    }
);

app.get("/auth/logout", (req: Request, res: Response) => {
    req.logout(() => {
        res.redirect("/");
    });
});

app.get("/auth/user", (req: Request, res: Response) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.status(401).json({ error: "Unauthorized" });
    }
});

//start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log("Discord Client ID:", process.env.DISCORD_CLIENT_ID);
console.log("Discord Client Secret:", process.env.DISCORD_CLIENT_SECRET);
console.log("Discord Redirect URI:", process.env.DISCORD_REDIRECT_URI);
console.log("Session Secret:", process.env.SESSION_SECRET);