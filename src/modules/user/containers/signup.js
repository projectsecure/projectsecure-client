import {render} from 'react-dom';
import {compose} from 'react-komposer';

import loginActions from '../actions/login'

import component from '../components/signup';
import actions from '../actions/signup';

const composer = (props, onData) => {

	let componentData = {
		actions,
		onSignup: (data) => {
			actions.signup(data).then(() => {
				loginActions.login({
					username: data.username,
					password: data.password
				});
			});
		}
	};

	onData(null, componentData);
};

export default compose(composer)(component);
