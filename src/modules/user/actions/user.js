import {browserHistory} from 'react-router';
import jwtDecode from 'jwt-decode';
import gravatar from 'gravatar';

import loginActions from './login';

import {store} from '../../core/helpers/storage';
import request from '../../core/helpers/request';

const actions = {
	updateUser(data) {
		// TODO: use user endpoint when available
	},

	deleteUser(data) {
		return new Promise((resolve, reject) => {
			request
				.del('users/me')
				.end((err, res) => {
					resolve(res);
				});
		});
	},

	checkAuth: () => {
		return new Promise((resolve, reject) => {
			if(store.getState().userState.currentTokenUser) {
				return resolve();
			} else {
				return reject();
			}
		});
	},

	getCurrentUser: () => {
		return new Promise((resolve, reject) => {
			request
				.get('users/me')
				.end((err, res) => {
					const user = res.body || {};

					user.image = gravatar.url(user.email, {
						s: 200,
						d: 'mm'
					});

					resolve(user);
				});
			});
	}
};

export default actions;
