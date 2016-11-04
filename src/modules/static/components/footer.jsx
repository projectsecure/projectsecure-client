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
							&copy; 2016 <a href="http://nikriek.de">Niklas Riekenbrauck</a> und <a href="http://nico.is">Nico Knoll</a>
						</div>
						<div className="col-sm-12 col-md-4">
							Made with <span className="heart">&hearts;</span> in Berlin
						</div>
						<div className=" col-sm-12 col-md-4">
							<a href="">Kontakt</a> <a href="">Partner werden</a> <a href="">Impressum</a>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
