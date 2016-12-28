import {Link} from 'react-router'

require('../styles/footer.scss');

class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-4">
							&copy; 2016 <a href="http://nico.is">Nico</a>, <a href="https://github.com/boeckhoff">Nico</a>, <a href="http://nikriek.de">Niklas</a> und <a href="https://github.com/Glumli">Julius</a>
						</div>
						<div className="col-sm-12 col-md-4">
							Made with <span className="heart">&hearts;</span> in Berlin
						</div>
						<div className=" col-sm-12 col-md-4">
							<Link to="/contact/">Kontakt</Link>&emsp;<Link to="/partner/">Partner werden</Link>&emsp;<Link to="/imprint/">Impressum</Link>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
