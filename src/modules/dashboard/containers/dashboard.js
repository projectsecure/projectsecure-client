import { render } from 'react-dom';
import { composeWithStore } from '../../core/helpers/storage';

import userActions from '../../user/actions/user';
import challengesActions from '../../challenges/actions/challenges';

import component from '../components/dashboard';

const composer = (props, onData, context) => {
	if(!userActions.checkAuth()) return;

	let componentData = {};

	Promise.all([
		userActions.getCurrentUser()
			.then((user) => {
				componentData.currentUser = user;
				componentData.isLoggedIn = !!user.username;
			}),
		challengesActions.getChallenges()
			.then((challenges) => {
				componentData.challenges = challenges;
			})
	]).then(() => {
		onData(null, componentData);
	});
};

export default composeWithStore(composer)(component);
