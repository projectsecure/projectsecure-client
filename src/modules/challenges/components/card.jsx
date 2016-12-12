import {Link} from 'react-router';

require('../styles/card.scss');

class ChallengeCard extends React.Component {

	constructor(props) {
		super(props);
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
					<Link className="btn btn-uppercase btn-primary btn-block" to={this.props.path}>Jetzt loslegen</Link>
				</div>
			</div>
		);
	}

}

export default ChallengeCard;
