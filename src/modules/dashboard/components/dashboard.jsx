import LayoutBackend from '../../backend/components/layout';

import SectionProfile from './profile';
import ChallengesGrid from '../../challenges/components/grid';

require('../styles/dashboard.scss');

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const challenges = [
			{
				title:'TOR',
				summary: 'At omnis fuga ridiculus eum asperiores, fringilla praesentium, diam per faucibus magna fugit molestiae pulvinar dolorem tempore nostrum suspendisse aenean! Quasi facere turpis?'
			},{
				title:'TOR',
				summary: 'At omnis fuga ridiculus eum asperiores, fringilla praesentium, diam per faucibus magna fugit molestiae pulvinar dolorem tempore nostrum suspendisse aenean! Quasi facere turpis?'
			},{
				title:'TOR',
				summary: 'At omnis fuga ridiculus eum asperiores, fringilla praesentium, diam per faucibus magna fugit molestiae pulvinar dolorem tempore nostrum suspendisse aenean! Quasi facere turpis?'
			},{
				title:'TOR',
				summary: 'At omnis fuga ridiculus eum asperiores, fringilla praesentium, diam per faucibus magna fugit molestiae pulvinar dolorem tempore nostrum suspendisse aenean! Quasi facere turpis?'
			},{
				title:'TOR',
				summary: 'At omnis fuga ridiculus eum asperiores, fringilla praesentium, diam per faucibus magna fugit molestiae pulvinar dolorem tempore nostrum suspendisse aenean! Quasi facere turpis?'
			},{
				title:'TOR',
				summary: 'At omnis fuga ridiculus eum asperiores, fringilla praesentium, diam per faucibus magna fugit molestiae pulvinar dolorem tempore nostrum suspendisse aenean! Quasi facere turpis?'
			}
		];

		return (
			<LayoutBackend className="route-dashboard">
				<SectionProfile />
				<ChallengesGrid challenges={challenges} title="Challenges fortsetzen" />
			</LayoutBackend>
		);
	}

}

export default Dashboard;
