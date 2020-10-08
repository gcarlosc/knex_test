'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'Project'
const tableName = 'projects'
const selectableProps = [
  'id',
  'name',
  'code',
  'created_at',
  'updated_at'
]

module.exports = knex => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps
  })

  return {
    ...guts
  }
}
