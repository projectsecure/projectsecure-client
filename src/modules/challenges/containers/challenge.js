import {render} from 'react-dom';
import {compose} from 'react-komposer';

import component from '../components/challenge';

const composer = (props, onData) => {

	let componentData = {
		title: 'Julius\' Mission',
		steps: [
			{
				type: 'summary',
				options: {
					title: 'Beschreibung',
					text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
				}
			},
			{
				type: 'button',
				options: {
					title: 'Click me',
					text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
					label: 'Do something',
					action: () => {
						alert('YEAH');
					}
				}
			},
			{
				type: 'input',
				options: {
					title: 'Text me',
					text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
					placeholder: 'Something',
					button: {
						label: 'Do something',
						action: (data) => {
							alert(data);
						}
					}
				}
			}
		]
	};

	onData(null, componentData);
};

export default compose(composer)(component);
