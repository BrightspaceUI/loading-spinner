'use strict';

var React = require('react');

class LoadingSpinner extends React.Component { 

	componentWillMount() {
		this.sizeValue = parseFloat( this.props.size );
		this.sizeUnits = this.props.size.substr( this.sizeValue.toString().length );
		
		this.thicknessValue = parseFloat( this.props.thickness );
		this.thicknessUnits = this.props.thickness.substr( this.thicknessValue.toString().length );
		
		if( this.thicknessUnits === '%' ) {
			this.thicknessValue *= this.sizeValue / 100;
			this.thicknessUnits = this.sizeUnits;
		}
		
		let validUnits = [ 'em', 'rem', 'px', 'ch', 'ex', 'pt', 'vw', 'vh', 'vmin', 'vmax', 'cm', 'mm', 'in', 'pc' ]; // Note: % is not supported for size
		
		if(
			!isFinite( this.sizeValue ) ||
			!isFinite( this.thicknessValue ) ||
			validUnits.indexOf( this.sizeUnits ) < 0 ||
			validUnits.indexOf( this.thicknessUnits ) < 0
		) {
			// revert to defaults and throw an exception
			this.sizeValue = 1.5;
			this.sizeUnits = 'em';
			this.thicknessValue = 0.15;
			this.thicknessUnits = 'em';
			throw 'Invalid spinner size or thickness';
		}
	}
	
	render() {
	
		let size = this.sizeValue + this.sizeUnits;
		let halfSize = (this.sizeValue / 2) + this.sizeUnits;
		
		let thickness = this.thicknessValue + this.thicknessUnits;
		let halfThickness = (this.thicknessValue / 2) + this.thicknessUnits;
		
		let spinnerCircleStyle = {
			border: thickness + ' solid ' + this.props.colour,
			borderRadius: '50%',
			boxSizing: 'border-box',
			overflow: 'hidden',
			position: 'relative',
			width: size,
			height: size
		};
		
		var spinnerArmStyle = {
			animation: 'spin 1.3s infinite cubic-bezier(0.165, 0.840, 0.440, 1.000)', // defined in app.scss
			transformOrigin: halfThickness + ' ' + halfThickness,
			background: this.props.colour,
			borderRadius: halfThickness,
			position: 'absolute',
			width: thickness,
			height: halfSize,
			left: 'calc( 50% - ' + halfThickness + ' )',
			top: 'calc( 50% - ' + halfThickness + ' )'
		};
		
		return (
			<div className={this.props.className} style={spinnerCircleStyle} >
				<div style={spinnerArmStyle} />
			</div>
		);
	}
	
}

// Properties:
// [Optional] size (string) - size of the spinner, including the units. All CSS units are supported EXCEPT for %
// [Optional] thickness (string) - the thickness of the lines/circle, including the units. All CSS units are supported, including % which is relative to the spinner's size (default "10%").
// [Optional] colour (string) - colour of the spinner (default "#cccccc")
// [Optional] className (string) - add custom styling. 

LoadingSpinner.defaultProps = {
	size: '1.5em',
	thickness: '10%',
	colour: '#cccccc',
	className: null
};
	
LoadingSpinner.propTypes = {
	size: React.PropTypes.string,
	thickness: React.PropTypes.string,
	colour: React.PropTypes.string,
	className: React.PropTypes.string
};

export default LoadingSpinner;
