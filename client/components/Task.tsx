import React from 'react'
interface Props {}

function Task(prop: Props) {
  return (
    <li key={prop.tasks.id}>
      <div className="view">
        <input
          onClick={() => prop.handleCompleteClick(prop.tasks)}
          className="toggle"
          type="checkbox"
        />
        {/* {editMode ? <input></input> : <p>hello</p>} */}
        <label onDoubleClick={prop.handleEditClick}>{prop.tasks.task}</label>
        <button
          onClick={(e) => prop.handleClick(e, prop.tasks.id)}
          className="destroy"
        ></button>
      </div>
      <input className="edit" value="Rule the web" />
    </li>
  )
}

export default Task
