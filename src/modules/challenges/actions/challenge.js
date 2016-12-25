export default {
	updateStep(challengeName, stepName, data) {
		request
			.put(`http://127.0.0.1:8000/api/challenges/${challengeName}/steps/${stepName}`)
			.set('Authorization', 'JWT ' + localStorage.token)
			.send(data)
			.end((res) => {
				console.log(res);
			});
	},

	getChallenge(challengeName) {
		const data = {};
		return new Promise((resolve, reject) => {
			request.post(`http://localhost:8000/api/challenges/${challengeName}/start`)
			 .set('Authorization', 'JWT ' + localStorage.token)
			 .end(() => {
				 // always try to start the challenge and ignore if already started
			 	resolve(true)
			 });
		}).then(() => {
			return new Promise((resolve, reject) => {
				request.get(`http://localhost:8000/api/challenges/${challengeName}`)
					.set('Authorization', 'JWT ' + localStorage.token)
					.end((err, res) => {
						if(err) throw new Error(err);

						data.challenge = res.body || {};
						data.challenge.name = challengeName;

						return resolve(res);
					});
			});
		}).then(() => {
			return new Promise((resolve, reject) => {
				request.get(`http://localhost:8000/api/challenges/${challengeName}/steps`)
					.set('Authorization', 'JWT ' + localStorage.token)
					.end((err, res) => {
						if(err) throw new Error(err);

						data.steps = res.body || [];

						// TODO: Remove mock data
						data.steps = data.steps.map((step) => {
							step.status = 'COMPLETED';
							return step;
						});

						let allStepsCompleted = true;
						data.steps.forEach((step) => {
							if(step.status != 'COMPLETED') {
								allStepsCompleted = false;
							}
						});

						data.allStepsCompleted = allStepsCompleted;

						resolve(data);
					});
			});
		});
	},

	completeChallenge(challengeName) {
		return new Promise((resolve, reject) => {
			request
				.post(`http://127.0.0.1:8000/api/challenges/${challengeName}/complete`)
				.set('Authorization', 'JWT ' + localStorage.token)
				.end((err, res) => {
					if(err) {
						reject(err);
					}

					resolve(res)
				});
		});
	}
}
