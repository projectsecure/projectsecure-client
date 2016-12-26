import {render} from 'react-dom';
import { composeWithStore } from '../../core/helpers/storage';

import {browserHistory} from 'react-router';

import userActions from '../../user/actions/user';

import component from '../components/layout';

const composer = (props, onData, context) => {

	let componentData = {};
	userActions.getCurrentUser().then((user) => {
		componentData.currentUser = user;
		componentData.isLoggedIn = !!user.username;

		onData(null, componentData);
	});
};



export default composeWithStore(composer)(component);
