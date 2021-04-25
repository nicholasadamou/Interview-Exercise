const winston = require('winston');

const { pool } = require('../db');

const { Person }  = require('../model/person');

//=====================================================
// LOGGING

const logger = winston.createLogger({})
logger.add(new winston.transports.Console())

//=====================================================

const parseInputFile = (inputFile) => {
	let people = [];

	Object.keys(inputFile).forEach(groupNumber => {
		const group = inputFile[groupNumber]

		Object.keys(group).forEach(name => {
			const color = group[name];

			const person = new Person(name, color);

			people.push(person);
		})
	});

	return people;
}

const getColorOptions = (request, response) => {
	pool.query(
		"select distinct color " +
			 "from people.person",
		(error, results) => {
			if (error) {
				throw error;
			}

			const colors = results.rows.map(item => {
				return item['color'];
			})

			logger.info(colors);

			response.status(200).json(colors);
		}
	)
}

const getPeopleByColor = (request, response) => {
	const { color } = request.query;

	pool.query(
		"select * " +
			 "from people.person " +
			 "where color = lower($1) " +
			 "order by color",
		[color],
		(error, results) => {
			if (error) {
				throw error;
			}

			logger.info(results.rows);

			response.status(200).json(results.rows);
		}
	);
}

const getPeople = (request, response) => {
	pool.query(
		"select * " +
			 "from people.person " +
			 "order by color",
		(error, results) => {
			if (error) {
				throw error;
			}

			logger.info(results.rows);

			response.status(200).json(results.rows);
		}
	)
}

const addPerson = async (request, response) => {
	const { firstName, color } = request.body;

	let person;

	try {
		person = await pool.query(
			"select * " +
				 "from people.person " +
				 "where first_name = $1",
			[firstName]
		);
	} catch(e) {
		logger.error(e.message);

		response
			.status(500)
			.json(e.message);
	}

	const doesPersonExist = person.rows.length > 0;

	if (doesPersonExist) {
		person = person.rows[0];

		const personHasSameColor = person.color === color.toLowerCase();

		if (!personHasSameColor) {
			pool.query(
				"update people.person " +
					 "set color = lower($1), updated_on current_timestamp " +
					 "where id = $2 " +
					 "returning *",
				[color, person.id],
				(error, results) => {
					if (error) {
						throw error;
					}

					logger.info(results.rows[0]);

					response
						.status(200)
						.json(results.rows[0]);
				}
			);
		}
	} else {
		pool.query(
			"insert into people.person " +
				 "(first_name, color) " +
				 "values ($1, lower($2)) " +
				 "returning *",
			[firstName, color],
			(error, results) => {
				if (error) {
					throw error;
				}

				logger.info(results.rows[0]);

				response
					.status(200)
					.json(results.rows[0]);
			}
		);
	}
}

module.exports = {
	parseInputFile,
	getColorOptions,
	getPeopleByColor,
	getPeople,
	addPerson
};
