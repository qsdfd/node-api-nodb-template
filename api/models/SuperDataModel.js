const SchemaModel = require('./SchemaModel.js');
const SuperDataSchema = require('./schemas/superDataSchema.js');


module.exports = class extends SchemaModel{
    schema(){
        return SuperDataSchema;
    }
}