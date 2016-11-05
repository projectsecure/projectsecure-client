import SectionForm from './form';
import LayoutStatic from '../../static/components/layout';

require('../styles/login.scss');

class Login extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<LayoutStatic className="route-login">
				<SectionForm role="signup" />
			</LayoutStatic>
		);
	}

}

export default Login;
