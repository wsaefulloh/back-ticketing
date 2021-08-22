const response = require('../Helpers/Response');
const jwt = require('jsonwebtoken');

const checkToken = (role) => {
	return (req, res, next) => {
		const { tokenauth } = req.headers;
		if (!tokenauth) {
			response(res, 400, { msg: 'please login first' });
		}
		jwt.verify(tokenauth, process.env.JWT_KEY, (err, decode) => {
			if (err) {
				response(res, 400, err);
			}
			if (decode.role === role) {
				next();
			} else {
				response(res, 400, { msg: 'Unauthorized' });
			}
		});
	};
};

module.exports = checkToken;
