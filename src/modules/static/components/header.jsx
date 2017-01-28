import {Link} from 'react-router'

require('../styles/header.scss');

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let continueButton;
		if(this.props.isLoggedIn) {
			continueButton = (
				<Link className="signup nav-link btn btn-primary" to="/dashboard/">
					Zum Dashboard
				</Link>
			);
		} else {
			continueButton = (
				<Link className="signup nav-link btn btn-primary" to="/login/">
					Login
				</Link>
			);
		}

		return (
			<header>
				<div className="container">
					<div className="row">
						<nav className="navbar navbar-light">
							<Link className="navbar-brand" to="/" />
							<ul className="nav navbar-nav navbar-right">
								<li className="nav-item">
									<Link className="nav-link" to="/contact/">Kontakt</Link>
								</li>
								<li className="nav-item">
									{continueButton}
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
