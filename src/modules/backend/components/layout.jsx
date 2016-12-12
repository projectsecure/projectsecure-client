import Layout from '../../core/components/layout';

import HeaderBackend from './header';
import Footer from '../../core/components/footer';

require('../styles/layout.scss');

class LayoutBackend extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<Layout {...this.props}>
				<HeaderBackend />
				{this.props.children}
				<Footer />
			</Layout>
		);
	}
}

export default LayoutBackend;
