export default {
	signup: ({username, email, password, color}) => {
		return new Promise((resolve, reject) => {
			request.post('http://localhost:8000/api/users/register').send({
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
