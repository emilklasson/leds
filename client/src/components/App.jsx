import React from 'react';
import Leds from './Leds';
import {connect} from 'react-redux';
import {toggleLed} from '../actions';
export const App = React.createClass({
	toggleLed(id) {
		this.props.dispatch(toggleLed(id));
	},
	render() {
		return 	<div>
							<div>
								<pre>{`
    __    __________  _____
   / /   / ____/ __ \\/ ___/
  / /   / __/ / / / /\\__ \\ 
 / /___/ /___/ /_/ /___/ / 
/_____/_____/_____//____/`}
								</pre>
							</div>
							<div>
								<Leds leds={this.props.leds} toggleLed={id => this.toggleLed(id)}/>
							</div>
						</div>
	}
});

function select(state) {
	return {
		leds: state.get('leds').toJS()
	}
};

export default connect(select)(App);