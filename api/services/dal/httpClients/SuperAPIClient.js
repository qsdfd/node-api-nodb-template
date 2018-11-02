const HttpClient = require('./HttpClient.js');
const cnsts = require('../../../constants');


module.exports = class extends HttpClient{
    static endpoint(){
        return this.createEndpoint(
            cnsts.API_URL,
            {
                random_param: 'nice_value',
                random_param_another: cnsts.NICE_ID
            });
    }
}