"use strict";
exports.__esModule = true;
exports.validateBody = void 0;
var Ajv = require('ajv');
var ajv = new Ajv();
var addFormats = require('ajv-formats');
addFormats(ajv);
//Fluent doesn't validate so I have to validate with AJV
function validateBody(schema) {
    try {
        return function (req, res, next) {
            req.body.height = parseFloat(req.body.height);
            req.body.weight = parseFloat(req.body.weight);
            if (req.body.hypoallergenic === 'true') {
                req.body.hypoallergenic = true;
            }
            else {
                req.body.hypoallergenic = false;
            }
            var valid = ajv.validate(schema, req.body);
            if (!valid) {
                //Get the error in that way to send the error to the DOM
                return res.status(400).send(ajv.errors[0]['message']);
            }
            next();
        };
    }
    catch (error) {
        console.error(error);
    }
}
exports.validateBody = validateBody;
;
