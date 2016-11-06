import {Link} from 'react-router'

require('../styles/profile.scss');

class SectionProfile extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="section-profile">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<img className="img-avatar" src="https://randomuser.me/api/portraits/men/11.jpg" />
							<div className="user-info">
								<span className="user-name">Lukas Müller</span><br />
								<span className="user-stats">3000 Punkte</span>
							</div>
						</div>
						<div className="col-md-8">
							<div className="badges">
								<span className="badge"
									  data-toggle="tooltip"
									  data-placement="bottom"
									  title="Badge for..."></span>
								<span className="badge"
									  data-toggle="tooltip"
									  data-placement="bottom"
									  title="Badge for..."></span>
								<span className="badge"
									  data-toggle="tooltip"
									  data-placement="bottom"
									  title="Badge for..."></span>
								<span className="badge"
									  data-toggle="tooltip"
									  data-placement="bottom"
									  title="Badge for..."></span>
								<span className="badge"
									  data-toggle="tooltip"
									  data-placement="bottom"
									  title="Badge for..."></span>
								<span className="badge badge-more">+12</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default SectionProfile;
