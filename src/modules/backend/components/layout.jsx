import Layout from '../../core/components/layout';

import HeaderBackend from './header';

require('../styles/layout.scss');

class LayoutBackend extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Layout {...this.props}>
				<HeaderBackend />
				{this.props.children}
			</Layout>
		);
	}

}

export default LayoutBackend;
