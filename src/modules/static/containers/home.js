import {render} from 'react-dom';
import { composeWithStore } from '../../core/helpers/storage';

import challengesActions from '../../challenges/actions/challenges';

import component from '../components/home';
import actions from '../actions/home';

const composer = (props, onData, context) => {
	let componentData = Object.assign({}, {actions}, context.getState().userState);

	challengesActions.getChallenges({noAuth: true}).then((challenges) => {
		componentData.challenges = challenges;
		onData(null, componentData);
	});
};

export default composeWithStore(composer)(component);
