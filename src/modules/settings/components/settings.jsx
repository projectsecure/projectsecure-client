import SectionForm from './form';
import LayoutBackend from '../../backend/containers/layout';

require('../styles/settings.scss');

class Settings extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<LayoutBackend className="route-settings">
				<SectionForm {...this.props} />
			</LayoutBackend>
		);
	}

}

export default Settings;
