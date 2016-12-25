import LayoutBackend from '../../backend/containers/layout';

import SectionProfile from './profile';
import ChallengesGrid from '../../challenges/components/grid';

import {Storage} from '../../core/helpers';

require('../styles/dashboard.scss');

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<LayoutBackend className="route-dashboard">
				<SectionProfile currentUser={this.props.currentUser} />
				<ChallengesGrid challenges={this.props.challenges || []} title="Challenges fortsetzen" />
			</LayoutBackend>
		);
	}
}

export default Dashboard;
