import LayoutBackend from '../../backend/components/layout';

import Grid from '../../challenges/components/grid';

require('../styles/grid.scss');

class Challenges extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const challenges = [
			{
				title:'TOR',
				summary: 'At omnis fuga ridiculus eum asperiores, fringilla praesentium, diam per faucibus magna fugit molestiae pulvinar dolorem tempore nostrum suspendisse aenean! Quasi facere turpis?'
			},{
				title:'TOR',
				summary: 'At omnis fuga ridiculus eum asperiores, fringilla praesentium, diam per faucibus magna fugit molestiae pulvinar dolorem tempore nostrum suspendisse aenean! Quasi facere turpis?'
			},{
				title:'TOR',
				summary: 'At omnis fuga ridiculus eum asperiores, fringilla praesentium, diam per faucibus magna fugit molestiae pulvinar dolorem tempore nostrum suspendisse aenean! Quasi facere turpis?'
			},{
				title:'TOR',
				summary: 'At omnis fuga ridiculus eum asperiores, fringilla praesentium, diam per faucibus magna fugit molestiae pulvinar dolorem tempore nostrum suspendisse aenean! Quasi facere turpis?'
			},{
				title:'TOR',
				summary: 'At omnis fuga ridiculus eum asperiores, fringilla praesentium, diam per faucibus magna fugit molestiae pulvinar dolorem tempore nostrum suspendisse aenean! Quasi facere turpis?'
			},{
				title:'TOR',
				summary: 'At omnis fuga ridiculus eum asperiores, fringilla praesentium, diam per faucibus magna fugit molestiae pulvinar dolorem tempore nostrum suspendisse aenean! Quasi facere turpis?'
			}
		];

		return (
			<LayoutBackend className="route-dashboard">
				<Grid challenges={challenges} title="Neue Challenges" />
			</LayoutBackend>
		);
	}

}

export default Challenges;
