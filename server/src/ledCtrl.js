import {Gpio} from 'onoff';

export default function ledCtrl(store) {
	var leds = [];

	// Enable the pins defined in state
	var ledsInStore = store.getState().get('leds');

	ledsInStore.forEach( (led, key) => {
		leds[key] = new Gpio(led.get('GPIO'), led.get('GPIO_TYPE'));
	});

	// Subscribe to state changes
	store.subscribe(() => {
		var ledsInStore = store.getState().get('leds');
		ledsInStore.forEach( (led, key) => {
			leds[key].writeSync(led.get('enable') ? 1 : 0);
		});
	});
}
