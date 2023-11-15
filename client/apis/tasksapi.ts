import request from 'superagent'
import { NewTask } from '../models/TasksModel'

export async function getAllTasksApi() {
  const response = await request.get('/api/v1/todos')

  return response.body
}
export async function addTodoApi(task: NewTask) {
  try {
    await request.post('/api/v1/todos/').send(task)
  } catch (error) {
    console.error(error)
  }
}

export async function deleteTaskApi(id: number) {
  const response = await request.delete(`/api/v1/todos/${id}`)

  return response.body
}
