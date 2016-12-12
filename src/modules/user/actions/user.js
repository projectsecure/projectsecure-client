import {browserHistory} from 'react-router';
import jwtDecode from 'jwt-decode';

import loginActions from './login';

import {store} from '../../core/helpers/storage';

const actions = {
	checkAuth: (redirect = true) => {
		if(!store.getState().userState.currentUser) {
			if(redirect) loginActions.logout();
			return false;
		} else {
			return true;
		}
	}
}

export default actions;
