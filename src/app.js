import {render} from 'react-dom';
import { browserHistory, hashHistory, Router, Route, Link } from 'react-router';
import jwtDecode from 'jwt-decode';

import {App, Storage} from './modules/core/helpers';
import {store} from './modules/core/helpers/storage';

import modules from './modules';

require('file?name=[name].[ext]!./static/index.html');

const context = {};
const app = new App(context);
app.loadModules(Object.values(modules));

app.onInit(
	new Promise((resolve, reject) => {
		console.info('Get user auth state');
		request.post('http://localhost:8000/api/auth/verify').send({token: localStorage.token}).end((err, res) => {
			if(err) {
				store.dispatch({
					type: 'CURRENT_USER',
					currentTokenUser: false
				})
				resolve(err);
			} else {
				if ((res.body || {}).token) {
					store.dispatch({
						type: 'CURRENT_USER',
						currentTokenUser: jwtDecode(res.body.token)
					})
				}
				resolve(res);
			}
		});
	})
);

app.init().then((dom) => {
	render(dom, document.getElementById('root'));
});


