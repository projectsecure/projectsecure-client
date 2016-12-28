import {render} from 'react-dom';
import {compose} from 'react-komposer';

import component from '../components/feedback';
import actions from '../actions/feedback';

const composer = (props, onData) => {

	let componentData = {
		actions
	};

	onData(null, componentData);
};

export default compose(composer)(component);
