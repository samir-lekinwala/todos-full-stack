import React, { useEffect, useState } from 'react'
import * as models from '../models/TasksModel'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteTaskApi, getAllTasksApi, updateTodoApi } from '../apis/tasksapi'
// import e from 'express'

interface Props {
  tasks: any
}

function Task(prop: Props) {
  // const [allTasks, setAllTask] = useState(prop.tasks)
  const [editMode, setEditMode] = useState(false)
  const [edittedTask, setEdittedTask] = useState('')

  const mutateDeleteTask = useMutation({
    mutationFn: (id: number) => deleteTaskApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    },
  })

  const mutateCompleteTask = useMutation({
    mutationFn: (completedTask: models.Task) => updateTodoApi(completedTask),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    },
  })

  const mutateUpdateTask = useMutation({
    mutationFn: (updatedTask: models.Task) => updateTodoApi(updatedTask),
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

  function handleCompleteClick(task: models.Task) {
    const completedTask = { ...task, completed: true }
    mutateCompleteTask.mutate(completedTask)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const task = form.get('edittedTaskValue')?.valueOf() as string
    const updatedTask = { ...edittedTask, task }
    mutateUpdateTask.mutate(updatedTask)
    e.currentTarget.reset()
    setEditMode(false)
    // setEdittedTask(updatedTask)
    // await updateTodoApi(updatedTask)
  }

  function handleEditClick(task) {
    setEditMode(!editMode)
    setEdittedTask(task)
    console.log(task.id)
  }

  function createMappedData() {
    return allTasks.map((task: models.Task) =>
      task.completed == false ? (
        <div key={task.id}>
          <li key={task.id}>
            <div className="view">
              <input
                onClick={() => handleCompleteClick(task)}
                className="toggle"
                type="checkbox"
              />
              <label onDoubleClick={() => handleEditClick(task)}>
                {task.task}
              </label>
              <button
                onClick={(e) => handleClick(e, task.id)}
                className="destroy"
              ></button>
            </div>
            <input className="edit" value="Rule the web" />
          </li>
        </div>
      ) : null
    )
  }

  // console.log(allTasks)
  return editMode ? (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="edittedTaskValue">Edit your task</label>
        <input
          className="new-todo currentlyEditting"
          onDoubleClick={() => setEditMode(!editMode)}
          id="edittedTaskValue"
          name="edittedTaskValue"
          defaultValue={edittedTask.task}
        ></input>
      </form>

      {createMappedData()}
    </>
  ) : (
    createMappedData()
  )
}

export default Task
