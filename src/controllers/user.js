import {Log} from '_utils/log';

exports.listusers = (req, res) => {
    const params = req.params || {};
    const query = req.query || {};
    Log.debug('controller', 'listusers params: ' + JSON.stringify(params));
    Log.debug('controller', 'listusers query: ' + JSON.stringify(query));
    res.status(200).send('list users success');
};

exports.testusers = (req, res) => {
    const params = req.params || {};
    const query = req.query || {};
    Log.debug('controller', 'testusers params: ' + JSON.stringify(params));
    Log.debug('controller', 'testusers query: ' + JSON.stringify(query));
    res.status(200).send('test users success');
};