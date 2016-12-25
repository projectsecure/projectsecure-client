import {render} from 'react-dom';
import {compose} from 'react-komposer';
import {browserHistory} from 'react-router';

import userActions from '../../user/actions/user';

import component from '../components/challenge';
import actions from '../actions/challenge';

const composer = (props, onData) => {
	if(!userActions.checkAuth()) return;

	const challengeName = props.params.slug;

	let componentData = {
		actions,
		onCompleted: () => {
			actions.completeChallenge(challengeName).then(() => {
				browserHistory.push('/dashboard/');
			});
		}
	};

	actions.getChallenge(challengeName).then((data) => {
		componentData = Object.assign(componentData, data);
		onData(null, componentData);
	});
};

export default compose(composer)(component);
