const DataComposerDecorator = require('./DataComposerDecorator.js');
const SuperFilter = require('../responseFilters/SuperFilter.js');
const SuperDataModel = require('../../../models/SuperDataModel.js');


module.exports = class extends DataComposerDecorator{
    static composedDataPromise(){
        return this.createComposedDataPromise(
            SuperFilter,
            this.createDataModelObj
        );
    }

    static createDataModelObj(dataObj){
        return new SuperDataModel({
            name: dataObj.super_name,
            number: dataObj.super_number,
            email: dataObj.super_email
        });
    }
}