import {render} from 'react-dom';
import {compose} from 'react-komposer';

import userActions from '../../user/actions/user';

import component from '../components/settings';

const composer = (props, onData) => {
	if(!userActions.checkAuth()) return;

	let componentData = {};

	userActions.getCurrentUser().then((user) => {
		componentData.user = user;
		onData(null, componentData);
	});
};

export default compose(composer)(component);
