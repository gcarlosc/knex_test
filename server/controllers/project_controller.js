'use strict'

const { Project, Type } = require('../models')
const ProjectSerializer = require('../serializers/project_serializer');

const getProjects = (req, res, next) => {
  Project.findAll('y1470369997664d8efad9c3b940e3f6')
    .then(projects => {
        const jsonapi = ProjectSerializer.serialize(projects);
        res.json(jsonapi)
    })
    .catch(next)
}

const getProject = (req, res, next) => {
  const project_id = req.params.id

  Project.findById('y1470369997664d8efad9c3b940e3f6', project_id)
    .then(project => {
        const jsonapi = ProjectSerializer.serialize(project);
        res.json(jsonapi)
    })
    .catch(next)
}

const getTypesByProject = (req, res, next) => {
  const project_id = req.params.id

  Type.find('y1470369997664d8efad9c3b940e3f6', {project_id: project_id})
    .then(types => res.json({
      ok: true,
      message: 'types found',
      types,
      project_id
    }))
    .catch(next)
}

module.exports = {
  getProjects,
  getProject,
  getTypesByProject
}
