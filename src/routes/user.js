// import User from '../controllers/user';
import { Log } from '../utils/log';

// module.exports = api => {
// 	api.route('/users').get(User.list);
// 	api.route('/users/:userId').get(User.get);
// 	api.route('/users/:userId').put(User.put);
// 	api.route('/users/').post(User.post);
// 	api.route('/users/:userId').delete(User.delete);
// };

module.exports = api => {
	api.route('/test').get((req, res) => {
		Log.debug('user', 'running test route');
	});
}