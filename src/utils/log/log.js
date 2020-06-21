// import Provider from './provider/console';
// import Provider from './provider/channel';
import Provider from './provider/development';
// import Provider from './provider/release';

const debug = (...args) => {
  Provider.debug(...args);
};

const error = (...args) => {
  Provider.error(...args);
};

const log = (...args) => {
	Provider.debug(...args);
};

const trace = (...args) => {
	Provider.debug(...args);
}

export default {
  debug,
  error,
  log,
  trace,
};
