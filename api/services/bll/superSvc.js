const SuperDataComposer = require('../dal/dataComposers/SuperDataComposer.js');

module.exports.getSuperData = function(){
    // decorator
    return SuperDataComposer.composeData(
        SuperDataComposer.composeData(
            SuperDataComposer.composeData(
                SuperDataComposer.composeData(
                    SuperDataComposer.composeData(
                        SuperDataComposer.composeData(
                            SuperDataComposer.composeData(
                                SuperDataComposer.composeData())))))))
        .then(function(data){
            return data;
        });
}