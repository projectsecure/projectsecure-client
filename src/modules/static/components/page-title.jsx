import {Link} from 'react-router';

class SectionPageTitle extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="section-page-title">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h1>{this.props.title}</h1>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default SectionPageTitle;
