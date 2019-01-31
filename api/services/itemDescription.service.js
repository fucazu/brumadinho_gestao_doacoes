const TABLE = 'item_description'

const Base = new (require('./base'))(TABLE)

const addNew = function (obj) {
  return Base.insert(obj, 'id')
}

const getAll = function (limit, offset, fields) {
  return Base.get(null, limit, offset, fields)
}

const getAllActive = function (limit, offset) {
  return Base.getOnlyActive(limit, offset)
}

const getByDescription = function (text) {
  return Base.get(`"description" LIKE '%${text}%'`)
}

exports.addNew = addNew
exports.getAll = getAll
exports.getByDescription = getByDescription