import {Link} from 'react-router'
import Colorpicker from './colorpicker';

require('../styles/form.scss');

class SectionForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = Object.assign({
			email: '',
			password: '',
			color: '',
			username: ''
		}, this.props.user);
	}

	colorPickerHandleChange(color) {
		this.setState({color});
	};

	getColorPickerUI() {
		return (
			<Colorpicker color={this.state.color}
						 onColorChange={this.colorPickerHandleChange.bind(this)} />
		);
	}

	handleFieldChange(key, event) {
		let newState = this.state || {};
		newState[key] = event.target.value;

		this.setState(newState);
	}

	handleLogin(e) {
		this.props.actions.login.bind(this)({
			email: this.state.email,
			password: this.state.password
		});
	}


	render() {
		return (
			<section className="section-form">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 offset-sm-2">
							<div className="form-group">
								<h2>Einstellungen</h2>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-sm-8 offset-sm-2">

							<div className="form-group row field-avatar">
								<label className="col-xs-3 col-form-label">Anzeigebild
									<br /><span>(via <a href="http://gravatar.com">gravatar.com</a>)</span>
								</label>
								<div className="col-xs-9 img-avatar-wrapper">
									<img className="img-avatar"
										 src={this.props.user.image} />
								</div>
							</div>

							<div className="spacing"></div>

							<div className="form-group row">
								<label className="col-xs-3 col-form-label">Benutzername</label>
								<div className="col-xs-9">
									<input type="text"
										   className="form-control form-control-lg"
										   placeholder="Name"
										   value={this.state.username}
										   onChange={this.handleFieldChange.bind(this, 'username')} />
								</div>
							</div>
							<div className="form-group row">
								<label className="col-xs-3 col-form-label">Lieblingsfarbe</label>
								<div className="col-xs-9">
									{this.getColorPickerUI()}
								</div>
							</div>
							<div className="form-group row">
								<label className="col-xs-3 col-form-label">E-Mail-Adresse</label>
								<div className="col-xs-9">
									<input type="text"
										   className="form-control form-control-lg"
										   placeholder="E-Mail-Adresse"
										   value={this.state.email}
										   onChange={this.handleFieldChange.bind(this, 'email')} />
								</div>
							</div>

							<div className="spacing"></div>

							<div className="form-group row">
								<label className="col-xs-3 col-form-label">Neues Passwort</label>
								<div className="col-xs-9">
									<input type="password"
										   className="form-control form-control-lg"
										   placeholder="Passwort"
										   onChange={this.handleFieldChange.bind(this, 'password')} />
								</div>
							</div>
							<div className="form-group row">
								<label className="col-xs-3 col-form-label">Neues Passwort wiederholen</label>
								<div className="col-xs-9">
									<input type="password"
										   className="form-control form-control-lg"
										   placeholder="Passwort"
										   onChange={this.handleFieldChange.bind(this, 'password')} />
								</div>
							</div>

							<div className="form-group row">
								<label className="col-xs-3 col-form-label"></label>
								<div className="col-xs-9">
									<button className="btn btn-primary btn-uppercase btn-block btn-lg btn-save"
											onClick={this.handleLogin.bind(this)}>
										Speichern
									</button>
								</div>
							</div>


							<div className="row">
								<div className="col-xs-12">
									<div className="form-group">
										<div className="seperator" />
										<h3>Danger zone</h3>
									</div>
								</div>
							</div>

							<div className="form-group row">
								<label className="col-xs-3 col-form-label">Account löschen</label>
								<div className="col-xs-9">
									<button className="btn btn-danger btn-uppercase"
											onClick={this.handleLogin.bind(this)}>
										Account löschen
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default SectionForm;
