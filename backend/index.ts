import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as DiscordStrategy } from 'passport-discord';
import type { Profile } from 'passport-discord';
import cors from 'cors';
import dotenv from 'dotenv';
import { handler } from '../build/handler.js';

dotenv.config();

const app = express();

const ENV = process.env.NODE_ENV || 'development';
const isProd = ENV === 'production';
const PORT = process.env.PORT || (isProd ? 8080 : 3001);

//enable cors for frontend requests
app.use(
	cors({
		origin: isProd ? 'https://shadowspearinitiative.org' : 'http://localhost:5173',
		credentials: true
	})
);

// required env variables are available
const SESSION_SECRET = process.env.SESSION_SECRET || 'default_secret';
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID || '';
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || '';
const DISCORD_REDIRECT_URI = process.env.DISCORD_REDIRECT_URI || '';

//session middleware
app.use(
	session({
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: { secure: isProd }
	})
);

//passport setup
passport.use(
	new DiscordStrategy(
		{
			clientID: DISCORD_CLIENT_ID,
			clientSecret: DISCORD_CLIENT_SECRET,
			callbackURL: DISCORD_REDIRECT_URI,
			scope: ['identify']
		},
		(
			accessToken: string,
			refreshToken: string,
			profile: Profile,
			done: (error: Error | null, user?: Express.User) => void
		) => {
			return done(null, profile);
		}
	)
);

//store user in session
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj: Express.User, done) => done(null, obj));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//auth routes
app.get('/auth/discord', passport.authenticate('discord'));

app.get(
	'/auth/callback',
	passport.authenticate('discord', { failureRedirect: '/' }),
	(res: Response) => {
		res.redirect('/dashboard');
	}
);

app.get('/auth/logout', (req: Request, res: Response, next: NextFunction) => {
	req.logout((err) => {
		if (err) return next(err);
		res.redirect('/');
	});
});

app.get('/auth/user', (req: Request, res: Response) => {
	if (req.isAuthenticated()) {
		res.json(req.user);
	} else {
		res.status(401).json({ error: 'Unauthorized' });
	}
});

//start server
app.use(handler);
app.listen(PORT, () => console.log(`Server running on port ${PORT} in ${ENV} mode`));
