import request from '../../core/helpers/request';
import decorateChallenge from '../helpers/decorate';

export default {
	getChallenges(options) {
		return new Promise((resolve, reject) => {
			request.get('challenges', null, null, options).end((err, res) => {
				if(err) {
					return reject(err);
				}

				let challenges = (res.body || []).map((c) => decorateChallenge(c));

				resolve(challenges);
			});
		});
	}
};
