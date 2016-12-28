import challengeStatus from './status';
const API_URL = process.env.API_URL || 'http://localhost:8000/api/';

export default (challenge = {}) => {

	// check if steps completed
	let allStepsCompleted = true;
	(challenge.steps || []).forEach((step) => {
		if(step.status && step.status != challengeStatus.COMPLETED) {
			allStepsCompleted = false;
		}
	});

	challenge.allStepsCompleted = allStepsCompleted;

	// add generated path
	challenge.path = `/challenges/${challenge.slug}/`;

	// add image url
	challenge.image = `${API_URL}challenges/${challenge.slug}/badge`;

	return challenge;
};
