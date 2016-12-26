import request from '../../core/helpers/request';

export default {
	signup: ({username, email, password, color}) => {
		return new Promise((resolve, reject) => {
			request.post('users/register').send({
				username,
				email,
				password,
				color
			}).end((err, res) => {
				if(err) reject(err);

				resolve(true);
			});
		});
	}
};
