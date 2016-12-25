import {render} from 'react-dom';
import {compose} from 'react-komposer';

import userActions from '../../user/actions/user';
import actions from '../actions/challenges';

import component from '../components/challenges';

const composer = (props, onData, context) => {
	if(!userActions.checkAuth()) return;

	let componentData = {};

	actions.getChallenges().then((challenges) => {
		componentData.challenges = challenges;
		onData(null, componentData);
	});
};

export default compose(composer)(component);
