import Layout from '../components/layout';

require('../styles/loading.scss');

class Loading extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<Layout className="route-loading">
				<span>Loading</span>
			</Layout>
		);
	}
}

export default Loading;
