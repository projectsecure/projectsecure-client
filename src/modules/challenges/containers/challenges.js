import {render} from 'react-dom';
import {compose} from 'react-komposer';
import {browserHistory} from 'react-router';

import loginActions from '../../user/actions/login';
import userActions from '../../user/actions/user';
import actions from '../actions/challenges';

import component from '../components/challenges';

const composer = (props, onData, context) => {
	userActions.checkAuth().then(() => {

		let componentData = {};

		actions.getChallenges().then((challenges) => {
			componentData.challenges = challenges;
			onData(null, componentData);
		});

	}).catch(() => {
		loginActions.logout().then(() => {
			browserHistory.push('/login/');
		});
	});
};

export default compose(composer)(component);
