import SectionForm from './form';
import LayoutStatic from '../../static/containers/layout';

require('../styles/login.scss');

class Login extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<LayoutStatic className="route-login">
				<SectionForm role="login" onSubmit={this.props.onLogin.bind(this)} />
			</LayoutStatic>
		);
	}

}

export default Login;
