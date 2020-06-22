import {Log} from '_utils/log';
import Kitten from 'models/kitten';

exports.listkittens = (req, res) => {
    const params = req.params || {};
    const query = req.query || {};
    Log.debug('controller', 'listkittens params: ' + JSON.stringify(params));
    Log.debug('controller', 'listkittens query: ' + JSON.stringify(query));
    res.status(200).send('list kittens success');
};

exports.testkittens = (req, res) => {
    const params = req.params || {};
    const query = req.query || {};
    Log.debug('controller', 'testkittens params: ' + JSON.stringify(params));
    Log.debug('controller', 'testkittens query: ' + JSON.stringify(query));
    const kitty = {
        name: query.name || 'nameless',
        age: query.age || 1,
    };
    Kitten.create(kitty)
        .then(k => {
            Log.debug('controller', 'kitten created ' + JSON.stringify(k));
            res.json(k);
        })
        .catch(e => {
            Log.debug('controller', 'kitten create error: ' + JSON.stringify(e));
            res.status(500).send(err);
        });
    // res.status(200).send('test kittens success');
};