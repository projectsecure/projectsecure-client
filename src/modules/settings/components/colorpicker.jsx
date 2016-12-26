import {Link} from 'react-router'
import { CirclePicker, TwitterPicker } from 'react-color';

require('../styles/colorpicker.scss');

class Colorpicker extends React.Component {

	constructor(props) {
		super(props);

		this.state = Object.assign({
			displayColorPicker: false,
			color: this.props.color
		}, this.props.user);
	}

	onColorChange(color) {
		this.setState({color});
		if(this.props.onColorChange) {
			this.props.onColorChange(color);
		}
	}

	colorPickerHandleClick()  {
		this.setState({displayColorPicker: !this.state.displayColorPicker})
	};

	colorPickerHandleClose() {
		this.setState({displayColorPicker: false})
	};

	colorPickerHandleChange(color) {
		this.onColorChange(color.hex)
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

	render() {
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
					<TwitterPicker colors={colors} triangle="top-right" color={ color } onChange={ this.colorPickerHandleChange.bind(this) } width="348"/>
				</div> : null }
			</div>
		);
	}
}

export default Colorpicker;
