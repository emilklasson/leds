import {List, Map} from 'immutable';

export const INITIAL_STATE = Map();

export function toggleLed(state, ledId) {
	var ledEnable = state.getIn(['leds', ledId.toString(), 'enable']);
	if (!ledEnable) {
		return enableLed(state, ledId);
	}
	
	return disableLed(state, ledId);
}

export function enableLed(state, ledId) {
	return state.updateIn(['leds', ledId.toString(), 'enable'], enable => true);
}

export function disableLed(state, ledId) {
	return state.updateIn(['leds', ledId.toString(), 'enable'], enable => false);
}
