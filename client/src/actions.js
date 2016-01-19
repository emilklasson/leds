export const SET_STATE = 'SET_STATE';
export const TOGGLE = 'TOGGLE';

export function setState(state) {
	return {
		type: SET_STATE,
		state
	};
}

export function toggleLed(id) {
	return {
		meta: {remote: true},
		type: TOGGLE,
		ledId: id
	};
}