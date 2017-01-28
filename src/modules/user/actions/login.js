import {browserHistory} from 'react-router';
import jwtDecode from 'jwt-decode';

import {store} from '../../core/helpers/storage';
import request from '../../core/helpers/request';

export default {
	login: ({username, password}) => {
		return new Promise((resolve, reject) => {
			request.post('auth/login').send({
				username,
				password
			}).end((err, res) => {
				if(err) reject({error: err, response: res});

				if((res.body || {}).token) {
					store.dispatch({
						type: 'CURRENT_USER',
						currentTokenUser: jwtDecode(res.body.token)
					});

					localStorage.setItem('token', res.body.token);
				}

				resolve(true);
			});
		});
	},

	logout() {
		return new Promise((resolve, reject) => {
			store.dispatch({
				type: 'CURRENT_USER',
				currentTokenUser: false
			});

			localStorage.removeItem('token');

			resolve(true);
		});
	}
};
