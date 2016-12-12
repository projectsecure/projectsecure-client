
import {render} from 'react-dom';
import { composeWithStore } from '../../core/helpers/storage';

import component from '../components/home';
import actions from '../actions/home';

const composer = (props, onData, context) => {
	onData(null, Object.assign(
		{},
		{actions},
		context.getState().userState
	));
};

export default composeWithStore(composer)(component);
