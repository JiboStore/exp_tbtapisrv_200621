import {default as LOG_CONST} from '../define'

const debug = (...args) => {
	if ( Array.isArray(args) ) {
		const {channel} = LOG_CONST.DEFINE;
		const setting = channel[args[0]] || {};
		if ( setting.debug ) {
			const content = Array.from(args);
			content.splice(0, 1);
			console.log(...content);
		}
	}
}

const error = (...args) => {
	if ( Array.isArray(args) ) {
		const {channel} = LOG_CONST.DEFINE;
		const setting = channel[args[0]] || {};
		if ( setting.error ) {
			const content = Array.from(args);
			content.splice(0, 1);
			console.log(...content);
		}
	}
}

export default {
	debug,
	error,
}