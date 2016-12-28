import LayoutStatic from '../../static/containers/layout';

import SectionPageTitle from '../../static/components/page-title';
import SectionPageContent from '../../static/components/page-content';

require('../styles/page.scss');

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<LayoutStatic className="route-page">
				<SectionPageTitle title={this.props.title} />
				<SectionPageContent content={this.props.text} />
			</LayoutStatic>
		);
	}

}

export default Home;
