import LayoutStatic from '../../static/components/layout';

import SectionIntro from './intro';

require('../styles/home.scss');

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<LayoutStatic className="route-root">
				<SectionIntro />
			</LayoutStatic>
		);
	}

}

export default Home;
