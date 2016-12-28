import LayoutBackend from '../../backend/containers/layout';

import SectionProfile from './profile';
import ChallengesGrid from '../../challenges/components/grid';

import {Storage} from '../../core/helpers';
import challengeStatus from '../../challenges/helpers/status';

require('../styles/dashboard.scss');

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
	}

	getStatusGrid(status, {limit = 3, title} = {}) {
		let challenges = (this.props.challengesByStatus[status] || []);

		if(!challenges.length) {
			return '';
		}

		return (<ChallengesGrid challenges={challenges.slice(0, limit)} title={title} />);
	}

	render() {
		console.log(this.props.badges);
		return (
			<LayoutBackend className="route-dashboard">
				<SectionProfile currentUser={this.props.currentUser} badges={this.props.badges} />
				{this.getStatusGrid(challengeStatus.IN_PROGRESS, {title: 'Challenge fortsetzen'})}
				{this.getStatusGrid(challengeStatus.NOT_STARTED, {title: 'Neue Challenges'})}
				{this.getStatusGrid(challengeStatus.COMPLETED, {title: 'Abgeschlossene Challenges'})}
			</LayoutBackend>
		);
	}
}

export default Dashboard;
