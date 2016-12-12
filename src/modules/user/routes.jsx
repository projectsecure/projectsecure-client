import Login from './containers/login';
import Signup from './containers/signup';

export default [
	{
		path: '/login/',
		name: 'login',
		component: Login
	},
	{
		path: '/signup/',
		name: 'signup',
		component: Signup
	}
];
