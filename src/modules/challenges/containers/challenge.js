import {render} from 'react-dom';
import {compose} from 'react-komposer';
import {browserHistory} from 'react-router';

import loginActions from '../../user/actions/login';
import userActions from '../../user/actions/user';

import component from '../components/challenge';
import actions from '../actions/challenge';

const composer = (props, onData) => {
	userActions.checkAuth().then(() => {

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

	}).catch(() => {
		loginActions.logout().then(() => {
			browserHistory.push('/login/');
		});
	});
};

export default compose(composer)(component);
