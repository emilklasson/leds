import {fromJS} from 'immutable';

const INITIAL_STATE = fromJS({leds: []});


export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SET_STATE':
			return setState(state, action.state);
	}
	return state;
}


function setState(state, newState) {
	return state.merge(newState);
}
