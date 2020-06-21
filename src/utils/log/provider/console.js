import {default as LOG_CONST} from '../define'

const debug = (...args) => {
	if ( LOG_CONST.DEFINE.console.debug ) {
		console.log(args);
	}
}

const error = (...args) => {
	if ( LOG_CONST.DEFINE.console.error ) {
		console.log(args);
	}
}

export default {
	debug,
	error,
}