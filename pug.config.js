const calculateAge = require('./src/pages/functions');

module.exports = {
    pug: {
        locals: {
            calculateAge,
        }
    }
};
