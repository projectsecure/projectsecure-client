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
		component: Partner,
		meta: {
			title: 'Partner'
		}
	},
	{
		path: '/contact/',
		name: 'contact',
		component: Contact,
		meta: {
			title: 'Contact'
		}
	},{
		path: '/imprint/',
		name: 'imprint',
		component: Imprint,
		meta: {
			title: 'Imprint'
		}
	}
];
