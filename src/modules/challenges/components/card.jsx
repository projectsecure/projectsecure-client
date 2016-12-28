import {Link} from 'react-router';

import challengeStatus from '../helpers/status';

require('../styles/card.scss');

class ChallengeCard extends React.Component {

	constructor(props) {
		super(props);
	}

	getButtonLabel(status) {
		switch(status) {
			case challengeStatus.IN_PROGRESS: {
				return 'Fortsetzen';
			}
			case challengeStatus.COMPLETED: {
				return 'Ansehen'
			}
			default: {
				return 'Jetzt loslegen';
			}
		}
	}

	render() {
		return (
			<div className="card challenge-card">
				<div className="card-block">
					<h3 className="card-title">{this.props.title}</h3>
				</div>
				<div className="card-image">

				</div>
				<div className="card-block">
					<p className="card-text">{this.props.description}</p>
					<Link className="btn btn-uppercase btn-primary btn-block" to={this.props.path}>
						{this.getButtonLabel(this.props.status)}
					</Link>
				</div>
			</div>
		);
	}

}

export default ChallengeCard;
