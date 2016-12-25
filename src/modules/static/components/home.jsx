import LayoutStatic from '../../static/containers/layout';

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
		return (
			<LayoutStatic className="route-home" {...this.props}>
				<SectionIntro currentUser={this.props.currentUser} />
				<ChallengesGrid challenges={this.props.challenges || []} />
				<SectionAbout />
				<SectionMentions />
			</LayoutStatic>
		);
	}

}

export default Home;
