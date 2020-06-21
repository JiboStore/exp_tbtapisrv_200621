import {default as LOG_CONST} from '../define'

const consolePrintDiscardFirst = (...args) => {
	const content = Array.from(args);
	content.splice(0, 1);
	consolePrint(...content);
}

const consolePrint = (...args) => {
	console.log(...args);
}

const debug = (...args) => {
	if ( Array.isArray(args) ) {
		const {release} = LOG_CONST.DEFINE;
		const setting = release[args[0]];
		if ( setting === undefined ) {
			if ( release.unchanneled ) {
				consolePrint(...args);
			}
		} else if ( setting.debug ) {
			consolePrintDiscardFirst(...args);
		}
	}
}

const error = (...args) => {
	if ( Array.isArray(args) ) {
		const {release} = LOG_CONST.DEFINE;
		const setting = release[args[0]];
		if ( setting === undefined ) {
			if ( release.unchanneled ) {
				consolePrint(...args);
			}
		} else if ( setting.error ) {
			consolePrintDiscardFirst(...args);
		}
	}
}

// const debugChannel = (...args) => {
// 	if ( Array.isArray(args) ) {
// 		const {release} = LOG_CONST.DEFINE;
// 		const setting = release[args[0]] || {};
// 		if ( setting.debug ) {
// 			const content = Array.from(args);
// 			content.splice(0, 1);
// 			console.log(...content);
// 		}
// 	}
// }

// const errorChannel = (...args) => {
// 	if ( Array.isArray(args) ) {
// 		const {release} = LOG_CONST.DEFINE;
// 		const setting = release[args[0]] || {};
// 		if ( setting.debug ) {
// 			const content = Array.from(args);
// 			content.splice(0, 1);
// 			console.log(...content);
// 		}
// 	}
// }

// const robust = (...args) => {
// 	console.log("ISARRAY: " + Array.isArray(args));
// 	console.log(JSON.stringify(args));
// 	if ( Array.isArray(args) ) {
// 		const {release} = LOG_CONST.DEFINE;
// 		console.log('release: ' + JSON.stringify(release));
// 		const args0 = args[0];
// 		const setting = release[args[0]] || {};
// 		console.log('args0: ' + args[0] + '====' + args0);
// 		console.log('release.search1: ' + JSON.stringify(release.search));
// 		console.log('release.search2: ' + JSON.stringify(release['search']));
// 		console.log('release.search3: ' + JSON.stringify(release[args[0]]));
// 		console.log('release.search4: ' + JSON.stringify(release[args0]));
// 		console.log('setting: ' + JSON.stringify(setting));
// 		console.log('setting.debug: ' + setting.debug);
// 		if ( setting.debug ) {
// 			const content = Array.from(args);
// 			content.splice(0, 1);
// 			console.log('content: ' + JSON.stringify(content));
// 			console.log(...content);
// 		}
// 	}
// }

export default {
	debug,
	error,
}