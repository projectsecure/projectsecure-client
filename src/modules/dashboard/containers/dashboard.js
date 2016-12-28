import { render } from 'react-dom';
import {browserHistory} from 'react-router';
import { composeWithStore } from '../../core/helpers/storage';

import loginActions from '../../user/actions/login';
import userActions from '../../user/actions/user';
import challengesActions from '../../challenges/actions/challenges';
import challengeStatus from '../../challenges/helpers/status';

import component from '../components/dashboard';

const composer = (props, onData, context) => {
	userActions.checkAuth().then(() => {

		let componentData = {};

		Promise.all([
			userActions.getCurrentUser()
				.then((user) => {
					componentData.currentUser = user;
					componentData.isLoggedIn = !!user.username;
				}),
			challengesActions.getChallenges()
				.then((challenges) => {
					componentData.challenges = challenges || {};

					// categorize challenges by status and set limit
					const challengesByStatus = {};
					componentData.challenges.forEach((challenge) => {
						const status = challenge.status || 'none';
						if(!challengesByStatus[status]) {
							challengesByStatus[status] = [];
						}
						challengesByStatus[status].push(challenge);
					});

					componentData.challengesByStatus = challengesByStatus;

					// badges
					componentData.badges = (componentData.challengesByStatus[challengeStatus.COMPLETED] || []).map((c) => {
						return {
							label: c.title,
							image: c.image,
							description: c.description
						};
					});

				})
		]).then(() => {
			onData(null, componentData);
		});

	}).catch(() => {
		loginActions.logout().then(() => {
			browserHistory.push('/login/');
		});
	});
};

export default composeWithStore(composer)(component);
