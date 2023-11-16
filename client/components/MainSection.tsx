// import React from 'react'
import { getAllTasksApi } from '../apis/tasksapi'
import { useQuery } from '@tanstack/react-query'
import * as models from '../models/TasksModel'
import Tasks from './Tasks.tsx'

function MainSection() {
  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: getAllTasksApi,
  })
  if (isLoading) return <h1>Loading...</h1>
  if (isError) return console.error(error)

  return (
    <>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {/* <!-- These are here just to show the structure of the list items -->
          <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}

          {/* If the task is completed */}
          <li className="completed">
            <div className="view">
              {tasks.map((task: models.Task) =>
                task.completed ? (
                  <div key={task.id}>
                    <input className="toggle" type="checkbox" checked />
                    <label>{task.task}</label>
                    <button className="destroy"></button>
                  </div>
                ) : null
              )}
            </div>
            {/* <input className="edit" value="Create a TodoMVC template" /> */}
          </li>
          {/* Task that are yet to be completed */}
          <Tasks tasks={tasks} />
        </ul>
      </section>
    </>
  )
}

export default MainSection
