import {Link} from 'react-router';

class SectionPageContent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="section-page-content">
				<div className="container">
					<div className="row">
						<div className="col-sm-8">
							{this.props.content}
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default SectionPageContent;
