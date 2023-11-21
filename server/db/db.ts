import { UpdateTask } from '../../client/models/TasksModel.js'
// import knexfile from './knexfile.js'
// import knex from 'knex'
import * as models from '../../client/models/TasksModel.js'
import connection from './connection'

const db = connection

export function getTodos() {
  return db('tasks').select()
}
export function getTaskById(id: number) {
  return db('tasks').where('id', id).select()
}

export function deleteTodo(id: number) {
  return db('tasks').where('id', id).delete()
}
export function updateTodo({ data }: { data: models.Task }) {
  console.log(data)
  return db('tasks').where('id', data.id).update(data)
}
export function addTodo(data: UpdateTask) {
  return db('tasks').insert(data)
}
// export function makeTodo({}) {
//   return db('tasks').insert()
// }
