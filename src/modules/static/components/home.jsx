import LayoutStatic from '../../static/components/layout';

import SectionIntro from './intro';
import ChallengesGrid from '../../challenges/components/grid';
import SectionAbout from './about';
import SectionMentions from './mentions';

require('../styles/home.scss');

class Home extends React.Component {

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
			}
		];

		return (
			<LayoutStatic className="route-home" {...this.props}>
				<SectionIntro currentUser={this.props.currentUser} />
				<ChallengesGrid challenges={challenges} />
				<SectionAbout />
				<SectionMentions />
			</LayoutStatic>
		);
	}

}

export default Home;
