import SectionForm from './form';
import LayoutStatic from '../../static/components/layout';

class Signup extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<LayoutStatic className="route-signup">
				<SectionForm role="signup" />
			</LayoutStatic>
		);
	}

}

export default Signup;
