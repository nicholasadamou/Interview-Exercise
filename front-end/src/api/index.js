/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const PARAMS = ({ methodType = 'GET' }) => ({
	method: methodType,
	headers: {
	  'Content-Type': 'application/json',
	},
  });

export default {
	getPeople: async () => {
		const URL = `/api/person`;

		let response = {};

		try {
			const { data } = await axios(URL,PARAMS({ methodType: 'GET' }));

			response = data;
		} catch (e) {
			console.log(e.toString());
		}

		return response;
	},
	getPeopleByColor: async (color) => {
		const URL = `/api/person/getPeopleByColor?color=${color}`;

		let response = {};

		try {
			const { data } = await axios(URL,PARAMS({ methodType: 'GET' }));

			response = data;
		} catch (e) {
			console.log(e.toString());
		}

		return response;
	},
	getColorOptions: async () => {
		const URL = `/api/person/colors`;

		let response = {};

		try {
			const { data } = await axios(URL,PARAMS({ methodType: 'GET' }));

			response = data;
		} catch (e) {
			console.log(e.toString());
		}

		return response;
	},
};
