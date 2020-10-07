'use strict';
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
var Inflector = require('inflected');
const dataset = {
  attributes: ['name', 'code', 'types']
}

module.exports = new JSONAPISerializer('projects', dataset);
