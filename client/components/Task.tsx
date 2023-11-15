import React, { useState } from 'react'
import * as models from '../models/TasksModel'

interface Props {
  tasks: any
}

function Task(prop: Props) {
  const [deleteButton, setDeleteButton] = useState('')

  const allTasks = prop.tasks

  function handleClick(id) {
    // e.preventDefault()
    setDeleteButton(id)
    console.log(deleteButton)
  }

  return allTasks.map((task: models.Task) => (
    <li key={allTasks.id}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{task.task}</label>
        <button
          onClick={() => handleClick(allTasks.id)}
          className="destroy"
          key={allTasks.id}
        ></button>
      </div>
      <input className="edit" value="Rule the web" />
    </li>
  ))
}

export default Task
