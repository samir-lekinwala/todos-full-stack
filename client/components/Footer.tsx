import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Task } from '../models/TasksModel'
import { deleteTaskApi } from '../apis/tasksapi'

interface Props {
  tasks: Task[]
}

function Footer(props: Props) {
  const data = props.tasks

  function taskRemaining() {
    const filtered = data.filter((x: Task) => x.completed == false)
    return filtered.length
  }
  taskRemaining()

  const mutateDeleteTask = useMutation({
    mutationFn: (id: number) => deleteTaskApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    },
  })
  const queryClient = useQueryClient()

  function handleClearCompleted() {
    for (let i = 0; i < data.length; i++)
      if (data[i].completed) {
        mutateDeleteTask.mutate(data[i].id)
      }
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
      <button onClick={handleClearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
