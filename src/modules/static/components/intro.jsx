require('../styles/intro.scss');

class SectionIntro extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="section-intro">
				<div className="container">
					<div className="row">
						<div className="col-sm-9">
							<h1>Willkommen bei<br />Project se_cure</h1>
							<h2>Spielerisch lernen<br />sicher zu surfen.</h2>
							<div className='cta' id='homeregister'>
								<button className='btn btn-primary btn-lg'>Jetzt mitmachen</button>
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
