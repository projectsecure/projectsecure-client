import request from '../../core/helpers/request';
import challengeStatus from '../helpers/status';

const _decorateChallenge = (challenge = {}) => {
	challenge.name = challenge.slug || challenge.name; // TODO: check if needed

	let allStepsCompleted = true;
	(challenge.steps || []).forEach((step) => {
		if(step.status && step.status != challengeStatus.COMPLETED) {
			allStepsCompleted = false;
		}
	});

	challenge.allStepsCompleted = allStepsCompleted;

	return challenge;
}

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

	startChallenge(challengeName) {
		return new Promise((resolve, reject) => {
			request.post(`challenges/${challengeName}/start`)
				.end((err, res) => {
					if(err) {
						reject(err);
					}

					const challenge = _decorateChallenge(res.body || {});
					return resolve(challenge);
				});
		});
	},

	getChallenge(challengeName) {
		return new Promise((resolve, reject) => {
			request.get(`challenges/${challengeName}`)
				.end((err, res) => {
					if(err) {
						reject(err);
					}

					const challenge = _decorateChallenge(res.body || {});
					return resolve(challenge);
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
