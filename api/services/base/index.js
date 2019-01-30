const { knex } = require('../database')

class Base {
  constructor (table) {
    this.table = table
  }

  add (obj) {
    return knex(this.table)
      .insert(obj, 'id')
  }

  get (condition, limit, offset, fields) {
    let query = `SELECT ${fields || '*'} FROM ${this.table}`
    if (condition || condition != null) {
      query = `${query} WHERE ${condition}`
    }
    if (offset || offset != null) {
      query = `${query} OFFSET ${offset}`
    }
    if (limit || limit != null) {
      query = `${query} LIMIT ${limit}`
    }
    return knex.raw(query)
      .then(result => result.rows)
  }

  async getFirst (condition, limit, offset) {
    let result = await this.get(condition, limit, offset)
    if (result && result.length) {
      return result[0]
    }
    return null
  }

  getById (id) {
    return this.get(`"id" = ${id}`)
  }

  getWhere (where) {
    return this.get(`${where}`)
  }

  getOnlyActive (limit, offset) {
    return this.get('"active" = true', limit, offset)
  }

  insert (obj) {
    return knex(this.table)
      .insert(obj, 'id')
  }

  update ({ id, ...obj }) {
    return knex(this.table)
      .update({ ...obj, updated_at: new Date() })
      .where('id', id)
  }

  raw (query) {
    return knex.raw(query).then(result => result.rows)
  }
}

module.exports = Base
