import {render} from 'react-dom';
import {compose} from 'react-komposer';

import {browserHistory} from 'react-router';

import component from '../components/layout';

const composer = (props, onData) => {

	let componentData = {};

	// check if login
	console.info('Check user auth');

	request.post('http://localhost:8000/api/auth/verify').send({token: localStorage.token}).end((err, res) => {
		if(err) {
			browserHistory.push('/login/?logout=1');
		}

		if((res.body || {}).token) {
			onData(null, componentData);
		}
	});
};

export default compose(composer)(component);
