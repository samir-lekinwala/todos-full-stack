import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('tasks').select()
}

export function deleteTodo(id: number) {
  return db('tasks').where('id', id).delete()
}

// export function makeTodo({}) {
//   return db('tasks').insert()
// }
