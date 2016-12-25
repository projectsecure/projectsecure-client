import LayoutBackend from '../../backend/containers/layout';

import Grid from '../../challenges/components/grid';

require('../styles/grid.scss');

class Challenges extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<LayoutBackend className="route-dashboard">
				<Grid challenges={this.props.challenges} title="Alle Challenges" />
			</LayoutBackend>
		);
	}

}

export default Challenges;
