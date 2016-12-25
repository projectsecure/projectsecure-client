import {browserHistory} from 'react-router';
import jwtDecode from 'jwt-decode';

import loginActions from './login';

import {store} from '../../core/helpers/storage';
import request from '../../core/helpers/request';

const actions = {
	updateUser(data) {
		// TODO: use user endpoint when available
	},

	checkAuth: () => {
		if(!store.getState().userState.currentTokenUser) {
			// TODO: Refactor to don't have redirect here
			//if(redirect) loginActions.logout();
			return false;
		} else {
			return true;
		}
	},

	getCurrentUser: () => {
		return new Promise((resolve, reject) => {
			request
				.get('users/me')
				.end((err, res) => {
					const user = res.body || {};
					resolve(user);
				});
			});
	}
};

export default actions;
