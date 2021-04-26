const express = require('express');

const { auth } = require('express-openid-connect');

const cors = require("cors");

const expressWinston = require('express-winston');
const winston = require('winston');

//=====================================================
// INITIALIZATION

require('dotenv').config();

const app = express();

//=====================================================
// LOGGING

const logger = winston.createLogger({})
logger.add(new winston.transports.Console())

app.use(expressWinston.logger({
	transports: [
		new winston.transports.Console()
	],
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.json()
	)
}));

//=====================================================
// CONFIGURATION

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 8888;

const config = {
	authRequired: false,
	auth0Logout: true,
	secret: process.env.SECRET,
	baseURL: process.env.BASE_URL,
	clientID: process.env.CLIENT_ID,
	issuerBaseURL: process.env.ISSUER_BASE_URL,
};

//=====================================================
// MIDDLEWARE

app.use(cors());
app.use(express.json());

app.use(auth(config));

//=====================================================
// RESTful API

app.get('/', (request, response) => {
	response.send(request.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.listen(PORT, () => {
	logger.info(`Server has started on port ${PORT}.`);
});
