import {render} from 'react-dom';
import {compose} from 'react-komposer';

import component from '../components/page';

require('../../../static/images/team.jpg');

const composer = (props, onData) => {
	let componentData = {};
	componentData.title = "Kontakt";
	componentData.text = (
		<div>
			<p><img className="full-image" src="/images/team.jpg"/></p>
			<p>
				Wir, also <a href="http://nico.is">Nico</a>, <a href="https://github.com/boeckhoff">Nico</a>, <a href="http://nikriek.de">Niklas</a> und <a href="https://github.com/Glumli">Julius</a>,
				sind ein Team junger, dynamischer, gutaussehender Studenten, die im Rahmen eines Seminars die Möglichkeit
				bekommen haben, dem Netz-Surfer von nebenan dabei zu helfen sich sicher in den Weiten des Internets zu bewegen.
			</p>
			<p>Der beste Weg um mit einer verantwortlichen Person in Kontakt zu treten, ist der Feedback-Knopf unten rechts.</p>

		</div>
	);

	onData(null, componentData);
};

export default compose(composer)(component);
