import * as Kitten from '../controllers/kitten';
import { Log } from 'utils/log';

module.exports = api => {
	api.route('/listkittens').get(Kitten.listkittens);
	api.route('/testkittens').all(Kitten.testkittens);
	// api.route('/tu/:theparams').all(User.testusers); // http://localhost:3000/tu/hehe => {"theparams":"hehe"}
};