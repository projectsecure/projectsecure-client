import {render} from 'react-dom';
import {compose} from 'react-komposer';

import component from '../components/page';

const composer = (props, onData) => {
	let componentData = {};
	componentData.title = "Impressum"
	componentData.text = (
		<div>
			<p>openHPI - Hasso Plattner Institute for Software Systems Engineering</p>
			<p>Prof.-Dr.-Helmert-Str. 2-3</p>
			<p>14482 Potsdam</p>
			<p>Germany Tel: +49 (0)331 5509-0</p>
			<p>Fax: +49 (0)331 5509-129</p>
			<p>Email: openhpi-info(at)hpi.uni-potsdam.de</p>
			<p>Internet: <a href="https://www.hpi.de">www.hpi-web.de</a></p>
		</div>
	);

	onData(null, componentData);
};

export default compose(composer)(component);
