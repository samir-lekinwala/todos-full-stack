import { UpdateTask } from '../../client/models/Tasks.js'
import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('tasks').select()
}
export function getTaskById(id: number) {
  return db('tasks').where('id', id).select()
}

export function deleteTodo(id: number) {
  return db('tasks').where('id', id).delete()
}
export function updateTodo(id: number, data: UpdateTask) {
  return db('tasks').where('id', id).update(data)
}
export function addTodo(data: UpdateTask) {
  return db('tasks').insert(data)
}
// export function makeTodo({}) {
//   return db('tasks').insert()
// }
