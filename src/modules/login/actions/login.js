import {browserHistory} from 'react-router';

export default {
	login: ({email, password}) => {
		request.post('http://localhost:8000/api/auth/login').send({'username': 'julius', 'password': 'passwort123'}).end((err, res) => {
			if(err) throw new Error(err);

			if((res.body || {}).token) {
				localStorage.setItem('token', res.body.token);
				browserHistory.push('/dashboard/');
			}
		});
	},

	logout() {
		localStorage.removeItem('token');
		browserHistory.push('/login/');
	}
};
