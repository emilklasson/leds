import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';



describe('reducer', () => {
	it('handle ENABLE', () => {
		const initialState = fromJS({
			leds: { 1: {name: 'Test1', enable: false},
					2: {name: 'Test2', enable: false}}
		});	
		const action = {type: 'ENABLE', ledId: 1}
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			leds: { 1: {name: 'Test1', enable: true},
			2: {name: 'Test2', enable: false}}
		}));
	});
});

describe('reducer', () => {
	it('handle DISABLE', () => {
		const initialState = fromJS({
			leds: { 1: {name: 'Test1', enable: false},
					2: {name: 'Test2', enable: true}}
		});
		const action = {type: 'DISABLE', ledId: 2}
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			leds: { 1: {name: 'Test1', enable: false},
			2: {name: 'Test2', enable: false}}
		}));
	});
});

describe('reducer', () => {
	it('handle TOGGLE enable', () => {
		const initialState = fromJS({
			leds: { 1: {name: 'Test1', enable: false},
					2: {name: 'Test2', enable: false}}
		});	
		const action = {type: 'TOGGLE', ledId: 1}
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			leds: { 1: {name: 'Test1', enable: true},
			2: {name: 'Test2', enable: false}}
		}));
	});
});

describe('reducer', () => {
	it('handle TOGGLE disable', () => {
		const initialState = fromJS({
			leds: { 1: {name: 'Test1', enable: true},
					2: {name: 'Test2', enable: false}}
		});	
		const action = {type: 'TOGGLE', ledId: 1}
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			leds: { 1: {name: 'Test1', enable: false},
			2: {name: 'Test2', enable: false}}
		}));
	});
});