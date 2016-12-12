import {browserHistory} from 'react-router';
import jwtDecode from 'jwt-decode';

import {store} from '../../core/helpers/storage';

export default {
	login: ({username, password}) => {
		request.post('http://localhost:8000/api/auth/login').send({
			username,
			password
		}).end((err, res) => {
			if(err) throw new Error(err);

			if((res.body || {}).token) {

				store.dispatch({
					type: 'CURRENT_USER',
					currentUser: jwtDecode(res.body.token)
				})

				localStorage.setItem('token', res.body.token);
				browserHistory.push('/dashboard/');
			}
		});
	},

	logout() {
		store.dispatch({
			type: 'CURRENT_USER',
			currentUser: false
		});

		localStorage.removeItem('token');

		browserHistory.push('/login/');
	}
};
