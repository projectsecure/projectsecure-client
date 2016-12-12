import {render} from 'react-dom';
import {compose} from 'react-komposer';

import {browserHistory} from 'react-router';

import jwtDecode from 'jwt-decode';

import component from '../components/layout';

const composer = (props, onData, context) => {

	let componentData = {};

	console.log(this, props, context);

	onData(null, componentData);
};



export default compose(composer)(component);
