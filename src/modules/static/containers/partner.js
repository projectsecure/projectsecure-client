import {render} from 'react-dom';
import {compose} from 'react-komposer';

import component from '../components/page';

const composer = (props, onData) => {
	let componentData = {};
	componentData.title = "Partner werden";
	componentData.text = (
		<div>
			<p>Dein Produkt hilft </p>
		</div>
	);
	onData(null, componentData);
};

export default compose(composer)(component);
