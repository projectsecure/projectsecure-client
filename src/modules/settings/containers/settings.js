import {render} from 'react-dom';
import {compose} from 'react-komposer';

import userActions from '../../user/actions/user';

import component from '../components/settings';

const composer = (props, onData) => {
	if(!userActions.checkAuth()) return;

	let componentData = {};

	onData(null, componentData);
};

export default compose(composer)(component);
