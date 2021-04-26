import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const TOKEN = {
    notEmpty: () => {
        const token = cookies.get('token');

        return token !== null && token !== '' && token !== undefined;
    },
    remove: () => {
        cookies.remove("token", {path: "/"});
    },
}

export const AUTH_URL =
	`${process.env.REACT_AUTH_SERVICE_HOST}:${process.env.REACT_AUTH_SERVICE_PORT}`;
