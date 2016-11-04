require('../styles/challenges.scss');

import Card from '../../challenges/components/card';

class SectionChallenges extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="section-challenges">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<Card
								title="Identity Leak"
								summary="At omnis fuga ridiculus eum asperiores, fringilla praesentium, diam per faucibus magna fugit molestiae pulvinar dolorem tempore nostrum suspendisse aenean! Quasi facere turpis?"
							/>
						</div>
						<div className="col-sm-4">
							<Card
								title="AdBlocker"
								summary="At omnis fuga ridiculus eum asperiores, fringilla praesentium, diam per faucibus magna fugit molestiae pulvinar dolorem tempore nostrum suspendisse aenean! Quasi facere turpis?"
							/>
						</div>
						<div className="col-sm-4">
							<Card
								title="TOR"
								summary="At omnis fuga ridiculus eum asperiores, fringilla praesentium, diam per faucibus magna fugit molestiae pulvinar dolorem tempore nostrum suspendisse aenean! Quasi facere turpis?"
							/>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default SectionChallenges;
