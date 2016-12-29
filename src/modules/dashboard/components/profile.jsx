import {Link} from 'react-router';

require('../styles/profile.scss');

class SectionProfile extends React.Component {

	constructor(props) {
		super(props);
	}

	getBadges(num) {
		const badges = this.props.badges;

		if (num) {
			return badges.slice(0, num);
		} else {
			return badges;
		}
	}

	getBadgesUI() {
		const numPreviewBadges = 5;
		const numBadges = this.getBadges().length;
		const numOverflowBadges = numBadges - numPreviewBadges;

		let additionalBadges;
		if(numOverflowBadges > 0) {
			additionalBadges = (
				<span
					className="badge badge-more badge-link"
					data-toggle="modal"
					data-target="#modal-badges">+{numOverflowBadges}</span>
			);
		} else if(numPreviewBadges - numBadges > 0) {
			additionalBadges = [];
			for(let i = numPreviewBadges - numBadges; i > 0; i--) {
				additionalBadges.push(<span className="badge"></span>);
			}
		}

		return (
			<div className="badges">
				{this.getBadges(numPreviewBadges).map((badge, index) =>  {
					return (
						<span
							key={index}
							data-toggle="modal"
							data-target="#modal-badges">
							<span className="badge badge-link"
								  style={{backgroundImage: `url(${badge.image})`}}
								  data-toggle="tooltip"
								  data-placement="bottom"
								  title={badge.label}></span>
						</span>
					);
				})}

				{additionalBadges}
			</div>
		);
	}


	getModalUI() {
		return (
			<div>
				<div className="modal fade" id="modal-badges">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<h4 className="modal-title">Badges</h4>
							</div>
							<div className="modal-body">
								<div className="container">
									{this.getBadges().map((badge, index) => {
										return (
											<div className="row" key={index}>
												<div className="col-xs-3">
													<img src={badge.image} />
												</div>

												<div className="col-xs-9">
													<span className="badge-title">{badge.label}</span>
													<span className="badge-description">{badge.description}</span>
												</div>
											</div>
										);
									})}
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Schließen</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<section className="section-profile">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<img className="img-avatar"
								 src={this.props.currentUser.image} />
							<div className="user-info">
								<span className="user-name">{this.props.currentUser.username}</span><br />
								<span className="user-stats">{this.getBadges().length} Badges</span>
							</div>
						</div>
						<div className="col-md-8">
							{this.getBadgesUI()}
						</div>
					</div>
				</div>

				{this.getModalUI()}
			</section>
		);
	}
}

export default SectionProfile;
