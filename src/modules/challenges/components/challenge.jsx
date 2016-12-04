import LayoutBackend from '../../backend/components/layout';

require('../styles/challenge.scss');

class Challenge extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			input: ''
		}
	}

	getStepSummaryUI({title, text}) {
		return (
			<div>
				<div className="card-block">
					<h2 className="card-title">{this.props.title}</h2>
				</div>

				<div className="card-block card-step">
					<h3 className="card-title">{title}</h3>
					<p className="card-text">{text}</p>
				</div>
			</div>
		);
	}

	getStepButtonUI({label, title, text, action}) {
		return (
			<div>
				<div className="card-block card-step">
					<h3 className="card-title">{title}</h3>
					<p className="card-text">{text}</p>
					<button className="btn btn-primary" onClick={action.bind(this)}>{label}</button>
				</div>
			</div>
		);
	}

	getStepInputUI({placeholder, title, text, button, value, type = 'text'}) {

		const changeAction = (event) => {
			this.setState({
				input: event.target.value
			});
		};

		return (
			<div>
				<div className="card-block card-step">
					<h3 className="card-title">{title}</h3>
					<p className="card-text">{text}</p>
					<input type={type} onChange={changeAction.bind(this)} defaultValue={value} placeholder={placeholder} />
					<button className="btn btn-primary" onClick={button.action.bind(this, this.state.input)}>{button.label}</button>
				</div>
			</div>
		);
	}


	getStepUI(type, options) {
		let content;
		switch(type) {
			case 'summary':
				content = this.getStepSummaryUI.bind(this);
				break;

			case 'button':
				content = this.getStepButtonUI.bind(this);
				break;

			case 'input':
				content = this.getStepInputUI.bind(this);
				break;
		}

		return (
			<div className="card">
				{content(options)}
			</div>
		)
	}


	render() {
		return (
			<LayoutBackend className="route-challenge">
				<section className="section-challenge">
					<div className="container">
						<div className="row">
							<div className="col-md-8 offset-md-2">
								{this.props.steps.map((step) => {
									return this.getStepUI(step.type, step.options)
								})}
							</div>
						</div>
					</div>
				</section>
			</LayoutBackend>
		);
	}

}

export default Challenge;
