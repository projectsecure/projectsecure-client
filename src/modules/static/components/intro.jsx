import {Link} from 'react-router';

require('../styles/intro.scss');

class SectionIntro extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let continueButtonPath;
		if(this.props.currentUser) {
			continueButtonPath = '/dashboard/';
		} else {
			continueButtonPath = '/signup/';
		}

		return (
			<section className="section-intro">
				<div className="container">
					<div className="row">
						<div className="col-sm-9">
							<h1>Willkommen bei<br />Project se_cure</h1>
							<h2>Spielerisch lernen<br />sicher zu surfen.</h2>
							<div className='cta' id='homeregister'>
								<Link className="btn btn-primary btn-lg" to={continueButtonPath}>Jetzt loslegen</Link>
								<span>und tolle Preise gewinnen!</span>
							</div>
						</div>
						<div className='lion hidden-xs hidden-sm'>
							<div className='eyes'></div>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default SectionIntro;
