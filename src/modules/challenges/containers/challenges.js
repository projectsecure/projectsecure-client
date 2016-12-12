import {render} from 'react-dom';
import {compose} from 'react-komposer';

import userActions from '../../user/actions/user';

import component from '../components/challenges';

const composer = (props, onData, context) => {
	if(!userActions.checkAuth()) return;

	let componentData = {};

	request.get('http://localhost:8000/api/challenges').end((err, res) => {
		if(err) {
			throw new Error(err);
		}

		componentData.challenges = res.body || [];

		componentData.challenges = componentData.challenges.map((c) => {
			c.path = `/challenges/${c.slug}/`;
			return c;
		});

		onData(null, componentData);
	});
};

export default compose(composer)(component);
