const express = require("express");

const expressWinston = require('express-winston');
const winston = require('winston');

const cors = require("cors");

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const fetch = require("node-fetch");

const { pool } = require("./db");
const { parseInputFile } = require("./queries/person");

const input = require("./assets/input.json");

//=====================================================
// INITIALIZATION

require('dotenv').config();

const app = express();

//=====================================================
// MIDDLEWARE

app.use(cors());
app.use(express.json());

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
const PORT = process.env.PORT || 5445;

const options = {
	definition: {
	  openapi: "3.0.0",
	  info: {
		title: "Person API",
		version: "1.0.0",
		description:
		  "An API for managing people and their favorite colors.",
		license: {
		  name: "MIT",
		  url: "https://spdx.org/licenses/MIT.html",
		},
		contact: {
		  name: "Nicholas Adamou",
		  email: "nicholas.adamou@ibm.com",
		},
	  },
	  servers: [
		{
		  url: `http://${HOST}:${PORT}`,
		  description: "Development server"
		},
	  ],
	},
	apis: ["src/routes/*.js"],
  };

const specs = swaggerJsdoc(options);

//=====================================================

pool.on('connect', (client) => {
	client.query('SET statement_timeout TO 3000');
});

app.use(
	"/api-docs",
	swaggerUi.serve,
	swaggerUi.setup(specs, { explorer: true })
);

//=====================================================
// RESTful API

app.get('/', (request, response) => {
	response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.use('/person', require('./routes/person'));

app.listen(PORT, () => {
	logger.info(`Server has started on port ${PORT}.`);
});

const people = parseInputFile(input);

// Add new people along with their individual color to the DB.
people.forEach(person => {
	fetch(`http://${HOST}:${PORT}/person`, {
		method: 'POST',
		body: JSON.stringify(person),
		headers: { 'Content-Type': 'application/json' }
	})
		.then(response => response.json())
		.then(response => {
			logger.info(response);
		})
		.catch(error => {
			logger.error(error);
		})
})
