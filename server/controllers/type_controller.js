'use strict'

const { Type, Project } = require('../models')

const getTypes = (req, res, next) => {
  const project_id = req.params.id

  Type.findAll('y1470369997664d8efad9c3b940e3f6')
    .then(types => res.json({
      ok: true,
      message: 'types found',
      types,
      project_id
    }))
    .catch(next)
}

const getType = (req, res, next) => {
  const typeId = req.params.id

  Type.findById(typeId)
    .then(type => res.json({
      ok: true,
      message: 'type found',
      type
    }))
    .catch(next)
}


module.exports = {
  getTypes,
  getType
}
