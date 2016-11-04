require('../styles/title.scss');

class SectionTitle extends React.Component {

	constructor(props) {
		super(props);
	}

	getSearchFieldUI() {
		return (
			<div className="search-wrapper">
				<div className="input-group input-group-sm">
					<input type="text" className="form-control search-field" placeholder="Search for..." />
					<span className="input-group-btn">
						<button className="btn btn-secondary" type="button"><i className="fa fa-search" /></button>
					</span>
				</div>
			</div>
		);
	}

	render() {
		return (
			<section className="section-title">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-9 no-padding">
							<h4>{this.props.title}</h4>
						</div>
						<div className="col-sm-3 no-padding">
							{this.getSearchFieldUI.bind(this)()}
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default SectionTitle;
