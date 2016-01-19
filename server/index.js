import makeStore from './src/store';
import startServer from './src/server';
import ledCtrl from './src/ledCtrl';

export const store = makeStore();
startServer(store);

//Initilize Led Controller
ledCtrl(store);
