import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTaskApi } from '../apis/tasksapi'
import { Task } from '../models/TasksModel'

interface Props {
  tasks: Task
}

function Footer(props: Props) {
  const data = props.tasks

  const mutateDeleteTask = useMutation({
    mutationFn: (id: number) => deleteTaskApi(id),
    onSuccess: () => {
      QueryClient.invalidateQueries(['tasks'])
    },
  })

  const QueryClient = useQueryClient()

  function taskRemaining() {
    const filtered = data.filter((x: Task) => x.completed == false)
    return filtered.length
  }
  taskRemaining()

  function removeCompletedTask() {
    const filtered = data.filter((x: Task) => x.completed == true)
    for (let i = 0; i < filtered.length; i++)
      mutateDeleteTask.mutate(filtered[i].id)
  }

  function handleClearClick() {
    removeCompletedTask()
  }

  return (
    <footer className="footer">
      {/* <!-- This should be `0 items left` by default --> */}
      <span className="todo-count">
        <strong>{taskRemaining()}</strong> item left
      </span>
      {/* <!-- Remove this if you don't implement routing --> */}
      {/* <ul className="filters">
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
      </ul> */}
      {/* <!-- Hidden if no completed items are left ↓ --> */}
      <button onClick={() => handleClearClick()} className="clear-completed">
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
