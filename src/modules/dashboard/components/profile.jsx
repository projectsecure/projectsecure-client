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
						<div className="col-md-12 text-center">
							<img className="img-avatar" src="https://randomuser.me/api/portraits/men/11.jpg" /><br />
							<h3>Lukas Müller</h3>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default SectionProfile;
