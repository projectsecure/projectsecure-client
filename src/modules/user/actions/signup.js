import request from '../../core/helpers/request';

export default {
	signup: ({username, email, password, color}) => {
		return new Promise((resolve, reject) => {
			request.post('users/register', null, null, {noAuth: true}).send({
				username,
				email,
				password,
				color
			}).end((err, res) => {
				if(err) reject({error: err, response: res});

				resolve(true);
			});
		});
	}
};
