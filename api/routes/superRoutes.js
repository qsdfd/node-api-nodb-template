const ctrl = require('../controllers/superCtrl');

module.exports = function(app) {
    app.route('/superdata').get(ctrl.getSuperData);
};
