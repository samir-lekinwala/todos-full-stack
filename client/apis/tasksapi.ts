import request from 'superagent'

export async function getAllTasks() {
  const response = await request.get('/api/v1/todos')

  return response.body
}
