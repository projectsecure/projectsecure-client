import {Link} from 'react-router'

require('../styles/header.scss');

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
				<div className="container">
					<div className="row">
						<nav className="navbar navbar-light">
							<Link className="navbar-brand" to="/" />
							<ul className="nav navbar-nav navbar-right">
								<li className="nav-item">
									<Link className="nav-link" to="/login/">Was ist das?</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/login/">Partner werden</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/login/">Blog</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/login/">Kontakt</Link>
								</li>
								<li className="nav-item">
									<Link className="signup" to="/login/">
										<button className="nav-link btn btn-primary">Login</button>
									</Link>
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
