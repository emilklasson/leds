import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import remoteActionMiddleware from './remote_action_middleware';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState} from './actions';
import {fromJS} from 'immutable';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => {
	store.dispatch(setState(fromJS(state)));
});

const createStoreWithMiddleware = applyMiddleware(
	remoteActionMiddleware(socket)
	)(createStore);

let store = createStoreWithMiddleware(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App test='test'/>
	</Provider>,
	document.getElementById('app')
);

