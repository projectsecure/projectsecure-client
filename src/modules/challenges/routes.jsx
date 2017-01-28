import Challenge from './containers/challenge';
import Challenges from './containers/challenges';

export default [
	{
		path: '/challenges/',
		name: 'challenges',
		component: Challenges,
		meta: {
			title: 'Challanges'
		}
	},
	{
		path: '/challenges/:slug',
		name: 'challenge',
		component: Challenge,
		meta: {
			title: 'Challenge'
		}
	}
];
