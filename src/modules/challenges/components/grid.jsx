require('../styles/grid.scss');

import Card from '../../challenges/components/card';

class Grid extends React.Component {

	constructor(props) {
		super(props);
	}

	getTitleUI() {
		if (!this.props.title) return '';

		return (
			<div className="row">
				<div className="col-sm-12">
					<h2>{this.props.title}</h2>
				</div>
			</div>
		);
	}

	getCardsUI() {
		if(!this.props.challenges) return '';

		return this.props.challenges.map((c) => {
			return (
				<div className="col-sm-4">
					<Card
						title={c.title}
						summary={c.summary}
					/>
				</div>
			);
		});

	}

	render() {
		return (
			<section className="section-challenges">
				<div className="container challenges-grid">
					{this.getTitleUI()}
					<div className="row">
						{this.getCardsUI()}
					</div>
				</div>
			</section>
		);
	}

}

export default Grid;
