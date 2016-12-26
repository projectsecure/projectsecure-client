import Layout from '../../core/components/layout';

import Header from './header';
import Footer from '../../core/components/footer';

class LayoutStatic extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Layout className={this.props.className}>
				<Header currentUser={this.props.currentUser} isLoggedIn={this.props.isLoggedIn} />
				<div>
					{this.props.children}
				</div>
				<Footer />
			</Layout>
		);
	}

}

export default LayoutStatic;
