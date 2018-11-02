const joi = require('joi');


module.exports = joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    number: Joi.number().integer(),
    email: Joi.string().email({ minDomainAtoms: 2 })
});