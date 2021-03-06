import { Link } from 'react-router'

require('../styles/feedback.scss');

class Feedback extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			feedback: ""
		};
	}

	componentDidMount() {
		$('[data-toggle="tooltip"]').tooltip();
	}

	handleFieldChange(key, event) {
		let newState = this.state || {};
		newState[key] = event.target.value;

		this.setState(newState);
	}

	sendFeedback(e) {
		this.props.actions.feedback(this.state.feedback);
	};


	render() {
		return (
			<div>
				<div
					data-toggle="tooltip"
					data-placement="left"
					title="Feedback senden"
					className="btn-feedback-wrapper"
				>
					<button
						type="button"
						className="btn btn-primary btn-feedback"
						data-toggle="modal"
						data-target="#modal-feedback"
					>
						<span className="icon"></span>
					</button>
				</div>

				<div className="modal fade modal-feedback" tabIndex="-1" id="modal-feedback" role="dialog" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<h4 className="modal-title" id="exampleModalLabel">Feedback senden</h4>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<textarea className="form-control" rows="5" id="message-text" onChange={this.handleFieldChange.bind(this, 'feedback')}></textarea>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-uppercase btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" onClick={this.sendFeedback.bind(this)} className="btn btn-uppercase btn-primary" data-dismiss="modal">Feedback abschicken</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Feedback;
