import {toggleLed, enableLed, disableLed, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'TOGGLE':
			return toggleLed(state, action.ledId);
		case 'ENABLE':
			return enableLed(state, action.ledId);
		case 'DISABLE':
			return disableLed(state,action.ledId);
	}
	return state;
}