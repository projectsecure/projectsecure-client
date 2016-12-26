import request from '../../core/helpers/request';

export default {
	updateStep(challengeName, stepName, data) {
		return new Promise((resolve, reject) => {
			request
				.put(`challenges/${challengeName}/steps/${stepName}`)
				.send(data)
				.end((res) => {
					resolve(res);
				});
		});
	},

	getChallenge(challengeName, start = true) {
		let challenge = {};
		return new Promise((resolve, reject) => {
			if(start) {
				request.post(`challenges/${challengeName}/start`)
					.end(() => {
						// always try to start the challenge and ignore if already started
						resolve(true);
					});
			} else {
				resolve(true);
			}
		}).then(() => {
			return new Promise((resolve, reject) => {
				request.get(`challenges/${challengeName}`)
					.end((err, res) => {
						if(err) throw new Error(err);

						challenge = res.body || {};
						challenge.name = challengeName;

						let allStepsCompleted = true;
						(challenge.steps || []).forEach((step) => {
							if(step.status && step.status != 'COMPLETED') {
								allStepsCompleted = false;
							}
						});

						challenge.allStepsCompleted = allStepsCompleted;

						console.log(challenge);

						return resolve(challenge);
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

					resolve(res);
				});
		});
	}
};
