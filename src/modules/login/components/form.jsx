import {Link} from 'react-router'
import { CirclePicker, TwitterPicker } from 'react-color';

require('../styles/form.scss');

class SectionForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			displayColorPicker: false,
			color: '',
		}
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

	getTitleUI() {
		if(this.props.role == 'login') {
			return (<h2>Willkommen zurück!</h2>);
		} else {
			return (<h2>Jetzt loslegen!</h2>);
		}
	}

	getFieldsUI() {
		if(this.props.role == 'login') {
			return (
				<div>
					<input type="text" className="form-control form-control-lg" placeholder="E-Mail-Adresse" onChange={this.handleFieldChange.bind(this, 'email')} />
					<input type="password" className="form-control form-control-lg" placeholder="Passwort" onChange={this.handleFieldChange.bind(this, 'password')} />
				</div>
			);
		} else {
			return (
				<div>
					<input type="text" className="form-control form-control-lg" placeholder="Name" onChange={this.handleFieldChange.bind(this, 'name')} />
					{this.getColorPickerUI()}
					<input type="text" className="form-control form-control-lg" placeholder="E-Mail-Adresse" onChange={this.handleFieldChange.bind(this, 'email')} />
					<input type="password" className="form-control form-control-lg" placeholder="Passwort" onChange={this.handleFieldChange.bind(this, 'password')} />
				</div>
			);
		}
	}

	getButtonUI() {
		return (
			<button className="btn btn-primary btn-uppercase btn-block btn-lg" onClick={this.handleLogin.bind(this)}>
				{(this.props.role == 'login') ? 'Einloggen' : 'Registrieren'}
			</button>
		);
	}

	getToggleRoleUI() {
		if(this.props.role == 'login') {
			return (<p>Neu bei Project Secure? <Link to="/signup/">Jetzt loslegen!</Link></p>);
		} else {
			return (<p>Du bist schon registriert? <Link to="/login/">Jetzt einloggen!</Link></p>);
		}
	}




	render() {
		return (
			<section className="section-form">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<div className="form-group">
								{this.getTitleUI()}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 offset-md-4">
							<div className="form-group">
								{this.getFieldsUI()}
								{this.getButtonUI()}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 text-center">
							<div className="form-group">
								{this.getToggleRoleUI()}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default SectionForm;
