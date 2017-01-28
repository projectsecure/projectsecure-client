import {render} from 'react-dom';
import {compose} from 'react-komposer';
import {browserHistory} from 'react-router';

import loginActions from '../../user/actions/login';
import userActions from '../../user/actions/user';

import component from '../components/settings';

const composer = (props, onData) => {
	userActions.checkAuth().then(() => {

		let componentData = {
			onUserDelete: () => {
				userActions.deleteUser().then(loginActions.logout()).then(() => {
					browserHistory.push('/login/');
				});
			}
		};

		userActions.getCurrentUser().then((user) => {
			componentData.user = user;
			onData(null, componentData);
		});

	}).catch(() => {
		loginActions.logout().then(() => {
			browserHistory.push('/login/');
		});
	});
};

export default compose(composer)(component);
