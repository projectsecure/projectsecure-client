import { render } from 'react-dom';
import { composeWithStore } from '../../core/helpers/storage';

import userActions from '../../user/actions/user';

import component from '../components/dashboard';

const composer = (props, onData, context) => {
	if(!userActions.checkAuth()) return;

	onData(null, Object.assign({}, context.getState().userState));
};

export default composeWithStore(composer)(component);
