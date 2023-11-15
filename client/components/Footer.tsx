import { useQuery } from '@tanstack/react-query'
import { getAllTasksApi } from '../apis/tasksapi'
import { Task } from '../models/TasksModel'

function Footer() {
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

  function taskRemaining() {
    const filtered = tasks.filter((x: Task) => x.completed == false)
    return filtered.length
  }
  taskRemaining()

  return (
    <footer className="footer">
      {/* <!-- This should be `0 items left` by default --> */}
      <span className="todo-count">
        <strong>{taskRemaining()}</strong> item left
      </span>
      {/* <!-- Remove this if you don't implement routing --> */}
      <ul className="filters">
        <li>
          <a className="selected" href="#/">
            All
          </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      {/* <!-- Hidden if no completed items are left ↓ --> */}
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default Footer
