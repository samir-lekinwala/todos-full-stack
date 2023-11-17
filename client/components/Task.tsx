import React from 'react'
import { Task } from '../models/TasksModel'
interface Props {
  tasks: Task
}

function Task(prop: Props) {
  const tasks = prop.tasks
  // const { tasks, handleCompleteClick, handleEditClick, handleClick } = prop
  return (
    <li key={prop.tasks.id}>
      <div className="view">
        <input
          onClick={() => handleCompleteClick(tasks)}
          className="toggle"
          type="checkbox"
        />
        {/* {editMode ? <input></input> : <p>hello</p>} */}
        <label onDoubleClick={handleEditClick}>{tasks.task}</label>
        <button
          onClick={(e) => handleClick(e, tasks.id)}
          className="destroy"
        ></button>
      </div>
      <input className="edit" value="Rule the web" />
    </li>
  )
}

export default Task
