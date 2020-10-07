'use strict'

const router = require('express').Router()
const {
  getTypes,
  getType
} = require('../controllers/type_controller')

router.route('/types')
  .get(getTypes)

router.route('/types/:id')
  .get(getType)

module.exports = router
