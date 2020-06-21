const printlog = true;

const DEFINE = {
  console: {
    debug: printlog,
    error: true,
  },
  channel: {
    unchanneled: true,
  },
  release: {
    unchanneled: false,
  },
  development: {
    unchanneled: printlog,
    firebase: { debug: printlog, error: printlog },
    analytics: { debug: printlog, error: printlog },
  },
};

export default {
  DEFINE,
};
