import React, { useState } from 'react'
import * as models from '../models/TasksModel'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTaskApi } from '../apis/tasksapi'
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

  const queryClient = useQueryClient()

  const allTasks = prop.tasks

  async function handleClick(
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) {
    e.preventDefault()
    // console.log(e)
    mutateDeleteTask.mutate(id)
    console.log(id)
    // setDeleteButton(id)
    // console.log(deleteButton)
  }

  return allTasks.map((task: models.Task) => (
    <li key={task.id}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{task.task}</label>
        <button
          onClick={(e) => handleClick(e, task.id)}
          className="destroy"
        ></button>
      </div>
      <input className="edit" value="Rule the web" />
    </li>
  ))
}

export default Task
