import Challenge from './containers/challenge';
import Challenges from './containers/challenges';

export default [
	{
		path: '/challenges/',
		name: 'challenges',
		component: Challenges
	},
	{
		path: '/challenges/:name',
		name: 'challenge',
		component: Challenge
	}
];
