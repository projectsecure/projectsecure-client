import request from '../../core/helpers/request';
import decorateChallenge from '../helpers/decorate';

export default {
	getChallenges() {
		return new Promise((resolve, reject) => {
			request.get('challenges').end((err, res) => {
				if(err) {
					reject(err);
				}

				let challenges = (res.body || []).map((c) => decorateChallenge(c));

				resolve(challenges);
			});
		});
	}
};
