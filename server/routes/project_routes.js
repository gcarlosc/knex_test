'use strict'

const router = require('express').Router()
const {
  getProjects,
  getTypesByProject,
  getProject
} = require('../controllers/project_controller')

router.route('/projects')
  .get(getProjects)

router.route('/projects/:id')
  .get(getProject)

router.route('/projects/:id/types')
  .get(getTypesByProject)

module.exports = router
