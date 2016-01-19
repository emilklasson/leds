import {createStore} from 'redux';
import reducer from './reducer';
import {fromJS} from 'immutable';
import fs from 'fs';

const initialState = fromJS(JSON.parse(fs.readFileSync('leds.json')));


export default function makeStore() {
	return createStore(reducer, initialState);
}
