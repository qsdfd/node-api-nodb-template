const svc = require('../services/bll/superSvc');

module.exports.getSuperData = function(req, res){
  svc.getSuperData()
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
};