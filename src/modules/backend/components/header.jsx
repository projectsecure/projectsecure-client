import {Link} from 'react-router'

require('../styles/header.scss');

class HeaderBackend extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="header-backend">
				<div className="container">
					<div className="row">
						<nav className="navbar navbar-light">
							<Link className="navbar-brand" to="/" />
							<ul className="nav navbar-nav navbar-right">
								<li className="nav-item">
									<Link className="nav-link" activeClassName="active" to="/dashboard/">Dashboard</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" activeClassName="active" to="/challenges/">Challenges</Link>
								</li>
								<li className="nav-item">
									<div className="btn-group">
										<button type="button" className="btn nav-link btn-secondary dropdown-toggle account-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<img className="img-avatar" src="https://randomuser.me/api/portraits/men/11.jpg" /><span>Lukas Müller</span>
										</button>
										<div className="dropdown-menu dropdown-menu-right">
											<Link className="dropdown-item" to="/settings/">Einstellungen</Link>
											<Link className="dropdown-item" to="/login/">Logout</Link>
										</div>
									</div>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
	}
}

export default HeaderBackend;
