import {render} from 'react-dom';
import {compose} from 'react-komposer';

import component from '../components/page';

const composer = (props, onData) => {
	let componentData = {};
	componentData.title = "Partner werden";
	componentData.text = (
		<div>
			<p>
				Ihnen gefällt das ProjectSecure? <br/>
				Sie wollen ein Teil davon werden und uns dabei unterstützen ein Verständnis für Sicherheit im Netz zu schaffen?<br/>
				<br/>
				Dann scheiben sie uns doch eine E-Mail an <b>project-secure@lists.hpi.de</b> mit einer kurzen Beschreibung ihrer Idee.
				Wir setzen uns dann zeitnah mit ihnen in Verbindung.
			</p>
		</div>
	);
	onData(null, componentData);
};

export default compose(composer)(component);
