const DataExtractor = require('./DataExtractor.js');
const SuperAPIClient = require('../httpClients/SuperAPIClient.js');
const cnsts = require('../../../constants.js');


module.exports = class extends DataExtractor{
    static filteredResponsePromise(){
        return this.createFilteredResponsePromise(
            SuperAPIClient,
            `data[${cnsts.NICE_ID}].anotherobj.whatever`
        );
    }
}