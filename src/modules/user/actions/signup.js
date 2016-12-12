import {browserHistory} from 'react-router';
import LoginActions from './login';

export default {
	signup: ({username, email, password, color}) => {
		request.post('http://localhost:8000/api/users/register').send({
			username,
			email,
			password,
			color
		}).end((err, res) => {
			if(err) throw new Error(err);

			LoginActions.login({username, password})
		});
	}
};
