import { render } from 'react-dom';
import {browserHistory} from 'react-router';
import { composeWithStore } from '../../core/helpers/storage';

import loginActions from '../../user/actions/login';
import userActions from '../../user/actions/user';
import challengesActions from '../../challenges/actions/challenges';

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
					componentData.challenges = challenges;
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
