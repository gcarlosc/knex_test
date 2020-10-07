'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'Type'
const tableName = 'types'

const selectableProps = [
  'id',
  'name',
  'image',
  'area',
  'num_bedroom',
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
