import request from '../../core/helpers/request';

export default {
	updateStep(challengeName, stepName, data) {
		request
			.put(`challenges/${challengeName}/steps/${stepName}`)
			.send(data)
			.end((res) => {
				console.log(res);
			});
	},

	getChallenge(challengeName) {
		const data = {};
		return new Promise((resolve, reject) => {
			request.post(`challenges/${challengeName}/start`)
			 .end(() => {
				 // always try to start the challenge and ignore if already started
			 	resolve(true)
			 });
		}).then(() => {
			return new Promise((resolve, reject) => {
				request.get(`challenges/${challengeName}`)
					.end((err, res) => {
						if(err) throw new Error(err);

						data.challenge = res.body || {};
						data.challenge.name = challengeName;

						return resolve(res);
					});
			});
		}).then(() => {
			return new Promise((resolve, reject) => {
				request.get(`challenges/${challengeName}/steps`)
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
				.post(`challenges/${challengeName}/complete`)
				.end((err, res) => {
					if(err) {
						reject(err);
					}

					resolve(res)
				});
		});
	}
}
