import { Link } from 'react-router'

require('../styles/feedback.scss');

class Feedback extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		$('[data-toggle="tooltip"]').tooltip();
	}


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
										<textarea className="form-control" rows="5" id="message-text"></textarea>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-uppercase btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-uppercase btn-primary">Send message</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Feedback;
