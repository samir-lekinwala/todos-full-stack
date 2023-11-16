import React from 'react'
import * as models from '../models/TasksModel'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTaskApi, updateTodoApi } from '../apis/tasksapi'
// import e from 'express'

interface Props {
  tasks: any
}

function Task(prop: Props) {
  // const [deleteButton, setDeleteButton] = useState('')
  const mutateDeleteTask = useMutation({
    mutationFn: (id: number) => deleteTaskApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    },
  })
  const mutateCompleteTask = useMutation({
    mutationFn: (id: number, completedStatus: models.Completed) =>
      updateTodoApi(id, completedStatus),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    },
  })

  const queryClient = useQueryClient()

  const allTasks = prop.tasks

  function handleClick(e: React.MouseEvent<HTMLButtonElement>, id: number) {
    e.preventDefault()
    mutateDeleteTask.mutate(id)
  }

  function handleCompleteClick(e, id) {
    const completedStatus = { completed: true }
    mutateCompleteTask.mutate(id, completedStatus)
    // e.preventDefault()
    console.log(e.currentTarget)
  }

  return allTasks.map((task: models.Task) =>
    task.completed == false ? (
      <li key={task.id}>
        <div className="view">
          <input
            onClick={handleCompleteClick}
            className="toggle"
            type="checkbox"
          />
          <label>{task.task}</label>
          <button
            onClick={(e) => handleClick(e, task.id)}
            className="destroy"
          ></button>
        </div>
        <input className="edit" value="Rule the web" />
      </li>
    ) : null
  )
}

export default Task
