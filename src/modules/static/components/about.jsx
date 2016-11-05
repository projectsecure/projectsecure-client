require('../styles/about.scss');

class SectionAbout extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="section-about">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-4 text-center">
							<p>
								<i className="fa fa-file-text-o" aria-hidden="true"></i>
							</p>
							<h3>Anleitungen &amp; Erkl&auml;rungen</h3>
							<br/>
							<p>Sicherheit im Netz kannst du auf vielf&auml;ltige Weise erreichen. Mit leicht verst&auml;ndlichen Anleitungen soll Jeder die M&ouml;glichkeit bekommen, f&uuml;r eigenen Schutz zu sorgen oder diesen zu verbessern.</p>
						</div>
						<div className="col-sm-12 col-md-4 text-center">
							<p>
								<i className="fa fa-comments-o" aria-hidden="true"></i>
							</p>
							<h3>Experten helfen bei Problemen</h3>
							<br/>
							<p>Zu jedem Thema kannst du dich &uuml;ber die Kommentarsektion mit anderen Nutzern austauschen. Experten schalten sich bei Problemen ein.</p>
						</div>
						<div className="col-sm-12 col-md-4 text-center">
							<p>
								<i className="fa fa-gift" aria-hidden="true"></i>
							</p>
							<h3>Gutscheine als Belohnung</h3>
							<br/>
							<p>Mal ehrlich, ein bisschen Ansporn braucht jeder, um sich mit dem Thema auseinander zusetzen, oder? F&uuml;r jede abgeschlossene Lektion bekommst du Bonuspunkte, die du dann in Form von Gutscheinen bei unseren Partnern einl&ouml;sen kannst.</p>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default SectionAbout;
