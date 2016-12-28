import challengeStatus from './status';

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

	return challenge;
};
