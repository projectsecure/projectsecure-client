import {Link} from 'react-router'
import { CirclePicker, TwitterPicker } from 'react-color';

require('../styles/form.scss');

class SectionForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = Object.assign({
			email: '',
			password: '',
			displayColorPicker: false,
			color: '',
			username: ''
		}, this.props.user);
	}

	colorPickerHandleClick()  {
		this.setState({ displayColorPicker: !this.state.displayColorPicker })
	};

	colorPickerHandleClose() {
		this.setState({ displayColorPicker: false })
	};

	colorPickerHandleChange(color) {
		this.setState({ color: color.hex })
	};

	getColorName(hex) {
		switch(hex) {
			case '#e7759d':
				return 'Rosa';
				break;
			case '#f47373':
				return 'Rot';
				break;
			case '#ff8a65':
				return 'Orange';
				break;
			case '#dce775':
				return 'Gelb';
				break;
			case '#a3e775':
				return 'Hellgrün';
				break;
			case '#37d67a':
				return 'Grün';
				break;
			case '#75e7d3':
				return 'Türkis';
				break;
			case'#2ccce4':
				return 'Blau';
				break;
			case '#ba68c8':
				return 'Lila';
				break;
			case '#d9e3f0':
				return 'Hellgrau';
				break;
			case '#697689':
				return 'Grau';
				break;
			case'#555555':
				return 'Dunkelgrau';
				break;
			default:
				return 'Eigene';
				break;
		}
	}

	getColorPickerUI() {
		const color = this.state.color;
		const colors = [ '#e7759d', '#f47373', '#ff8a65', '#dce775', '#a3e775', '#37d67a', '#75e7d3','#2ccce4', '#ba68c8', '#d9e3f0', '#697689','#555555'];
		return (
			<div className="color-picker">
				<div className="swatch  form-control form-control-lg" onClick={ this.colorPickerHandleClick.bind(this) }>
					{color ? <span>{this.getColorName(color)}</span> : <span className="placeholder">Lieblingsfarbe</span>}
					<div className="color" style={{backgroundColor: color}} />
				</div>
				{ this.state.displayColorPicker ? <div className="picker-popover">
					<div className="cover" onClick={ this.colorPickerHandleClose.bind(this) }/>
					<TwitterPicker colors={colors} triangle="top-right" color={ this.state.color } onChange={ this.colorPickerHandleChange.bind(this) } width="348"/>
				</div> : null }
			</div>
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
									<br /><span>(via <a href="">gravatar.com</a>)</span>
								</label>
								<div className="col-xs-9 img-avatar-wrapper">
									<img className="img-avatar"
										 src="https://randomuser.me/api/portraits/men/11.jpg" />
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
