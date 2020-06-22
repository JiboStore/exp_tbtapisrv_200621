import {Log} from '_utils/log';
import Kitten from 'models/kitten';

export const listkittens = async (req, res) => {
    const params = req.params || {};
    const query = req.query || {};
    Log.debug('controller', 'listkittens params: ' + JSON.stringify(params));
    Log.debug('controller', 'listkittens query: ' + JSON.stringify(query));
    const cursor = Kitten.find({}).cursor();
    for ( let doc = await cursor.next(); doc != undefined; doc = await cursor.next()) {
        Log.debug('controller', 'listkittens doc: ' + JSON.stringify(doc));
    }
    res.status(200).send('list kittens success');
};

export const testkittens = (req, res) => {
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
            res.status(500).send(e);
        });
    // res.status(200).send('test kittens success');
};

// export default {
//     listkittens,
//     testkittens,
// }