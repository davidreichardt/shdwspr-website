import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
//enable cors for frontend requests
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
// required env variables are available
const SESSION_SECRET = process.env.SESSION_SECRET || 'default_secret';
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID || '';
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || '';
const DISCORD_REDIRECT_URI = process.env.DISCORD_REDIRECT_URI || '';
//session middleware
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, //change to true in production for https
}));
//passport setup
passport.use(new DiscordStrategy({
    clientID: DISCORD_CLIENT_ID,
    clientSecret: DISCORD_CLIENT_SECRET,
    callbackURL: DISCORD_REDIRECT_URI,
    scope: ["identify"],
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));
//store user in session
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));
//initialize passport
app.use(passport.initialize());
app.use(passport.session());
//auth routes
app.get("/auth/discord", passport.authenticate("discord"));
app.get("/auth/callback", passport.authenticate("discord", { failureRedirect: "/" }), (res) => {
    res.redirect("/dashboard");
});
app.get("/auth/logout", (req, res, next) => {
    req.logout((err) => {
        if (err)
            return next(err);
        res.redirect("/");
    });
});
app.get("/auth/user", (req, res) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    }
    else {
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
//# sourceMappingURL=index.js.map