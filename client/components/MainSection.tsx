import React from 'react'
import { getAllTasks } from '../apis/tasksapi'
import { useQuery } from '@tanstack/react-query'
import { Task } from '../models/Tasks'

function MainSection() {
  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: getAllTasks,
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
              <input className="toggle" type="checkbox" checked />
              <label>Taste JavaScript</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" value="Create a TodoMVC template" />
          </li>
          {/* Task that are yet to be completed */}
          {tasks.map((task: Task) => (
            <li key={task.id}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{task.task}</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" value="Rule the web" />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default MainSection
