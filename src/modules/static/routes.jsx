import Home from './containers/home';
import Partner from './containers/partner';
import Contact from './containers/contact';
import Imprint from './containers/imprint';

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
	},{
		path: '/imprint/',
		name: 'imprint',
		component: Imprint
	}
];
