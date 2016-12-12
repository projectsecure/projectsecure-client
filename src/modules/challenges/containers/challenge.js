import {render} from 'react-dom';
import {compose} from 'react-komposer';

import userActions from '../../user/actions/user';

import component from '../components/challenge';
import actions from '../actions/challenge';

const composer = (props, onData) => {
	if(!userActions.checkAuth()) return;

	let componentData = {};
	console.log(localStorage.token);
	request.get('http://localhost:8000/api/challenges/' + props.params.slug + '/steps').set('Authorization', 'JWT ' + localStorage.token).end((err, res) => {
		if(err) {
			throw new Error(err);
		}

		/*
		let steps = (res.body || []).map((step) => {
			return new Promise((resolve, reject) => {
				request.get('http://localhost:8000/api/challenges/' + props.params.slug + '/steps/' + step.name).set('Authorization', 'JWT ' + localStorage.token).end((err, res) => {
					console.log(res);
					err ? reject(err) : resolve(res);
				});
			});
		});


		Promise.all(steps).then((steps) => {

			console.log(steps);

			componentData.challenge = res.body || [];
			onData(null, componentData);
		});
		*/

		componentData.steps = res.body || [];
		onData(null, componentData);

	});





	/*
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
						request.get('https://api.github.com/repos/visionmedia/superagent').end((err, response) => {
							console.log(response);
						});
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


	onData(null, Object.assign(componentData, {actions}));
	*/
};

export default compose(composer)(component);
