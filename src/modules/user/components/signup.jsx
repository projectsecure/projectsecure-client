import SectionForm from './form';
import LayoutStatic from '../../static/containers/layout';

class Signup extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<LayoutStatic className="route-signup">
				<SectionForm role="signup" onSubmit={this.props.onSignup.bind(this)} error={this.props.error} />
			</LayoutStatic>
		);
	}

}

export default Signup;
