const ApplicationException = require('./ApplicationException');
const { HttpStatusCodes } = require('../utils/httpStatusCodes');

class ServerException extends ApplicationException {
    constructor(message = 'Server error') {
        super(message, HttpStatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = ServerException;
