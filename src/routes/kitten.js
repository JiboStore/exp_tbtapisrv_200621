import * as Kitten from '../controllers/kitten';
import { Log } from 'utils/log';

/**
 *	If we export it this way, in server.js need to call it like this:
 *	require('./routes/' + file)(api); // have to use `module.exports = api => {};`
 **/
/*
module.exports = api => {
	api.route('/listkittens').get(Kitten.listkittens);
	api.route('/testkittens').all(Kitten.testkittens);
	// api.route('/tu/:theparams').all(User.testusers); // http://localhost:3000/tu/hehe => {"theparams":"hehe"}
};
*/

const router = (api) => {
    api.route('/listkittens').get(Kitten.listkittens);
	api.route('/testkittens').all(Kitten.testkittens);
}

export default router;