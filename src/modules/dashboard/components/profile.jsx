import {Link} from 'react-router'

require('../styles/profile.scss');

class SectionProfile extends React.Component {

	constructor(props) {
		super(props);

	}

	getBadges(num) {
		const badges = [
			{
				label: 'Test',
				image: 'http://localhost:3100/images/badge.png'
			},
			{
				label: 'Test',
				image: 'http://localhost:3100/images/badge.png'
			},
			{
				label: 'Test',
				image: 'http://localhost:3100/images/badge.png'
			},
			{
				label: 'Test',
				image: 'http://localhost:3100/images/badge.png'
			},
			{
				label: 'Test',
				image: 'http://localhost:3100/images/badge.png'
			},
			{
				label: 'Test',
				image: 'http://localhost:3100/images/badge.png'
			}
		];

		if (num) {
			return badges.slice(0, num);
		} else {
			return badges;
		}
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
													<span>{badge.label}</span>
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
		const numPreviewBadges = 5;
		let numBadges = this.getBadges().length - numPreviewBadges;

		let showMoreBadge;
		if(numBadges > 0) {
			showMoreBadge = (
				<span
					className="badge badge-more"
					data-toggle="modal"
					data-target="#modal-badges">+{numBadges}</span>
			);
		}



		return (
			<section className="section-profile">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<img className="img-avatar" src="https://randomuser.me/api/portraits/men/11.jpg" />
							<div className="user-info">
								<span className="user-name">Lukas Müller</span><br />
								<span className="user-stats">3000 Punkte</span>
							</div>
						</div>
						<div className="col-md-8">
							<div className="badges">
								{this.getBadges(numPreviewBadges).map((badge, index) =>  {
									return (
										<span
											key={index}
											data-toggle="modal"
											data-target="#modal-badges">
											<span className="badge"
												  style={{backgroundImage: `url(${badge.image})`}}
												  data-toggle="tooltip"
												  data-placement="bottom"
												  title={badge.label}></span>
										</span>
									);
								})}
								{showMoreBadge}
							</div>
						</div>
					</div>
				</div>

				{this.getModalUI()}
			</section>
		);
	}
}

export default SectionProfile;
