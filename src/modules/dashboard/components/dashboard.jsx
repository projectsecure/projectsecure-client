import LayoutBackend from '../../backend/components/layout';

import SectionProfile from './profile';
import SectionChallenges from '../../challenges/components/challenges';

require('../styles/dashboard.scss');

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<LayoutBackend className="route-dashboard">
				<SectionProfile />
				<SectionChallenges />
				<SectionChallenges />
				<SectionChallenges />
			</LayoutBackend>
		);
	}

}

export default Dashboard;
