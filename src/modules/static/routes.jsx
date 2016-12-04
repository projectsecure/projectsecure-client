import Home from './containers/home';
import Partner from './containers/partner';
import Contact from './containers/contact';

export default [
	{
		path: '/',
		component: Home
	},
	{
		path: '/partner/',
		name: 'partner',
		component: Partner
	},
	{
		path: '/contact/',
		name: 'contact',
		component: Contact
	}
];
