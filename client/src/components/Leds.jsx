import React from 'react';


export default React.createClass({
	getLeds() {
		if (this.props.leds) {
			return Object.keys(this.props.leds).map(key => {
				var led = this.props.leds[key]
				led.id = key;
				return led;
			});
		}
		return [];
	},
	render() {
		return 	<div>
							{this.getLeds().map(led => {
								return	<div key={led.id} onClick={() => this.props.toggleLed(led.id)}> 
													<Led led={led} />
												</div>
							})}
						</div>
	}
});

const Led = React.createClass({
	render() {
		var divStyle = {
			backgroundColor: this.props.led.enable ? '#A1D490' : '#F2F2F2'
		}
		return 	<div style={divStyle}>
							<h4>{this.props.led.name}</h4>
							<p>Enable: {this.props.led.enable ? 'true' : 'false'}</p>
						</div>
	}
});