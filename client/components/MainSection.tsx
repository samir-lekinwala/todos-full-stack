import * as models from '../models/TasksModel'
import Tasks from './Tasks.tsx'

interface Props {
  tasks: models.Task[]
}

function MainSection(props: Props) {
  const tasks = props.tasks

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
            <div className="view"></div>
            {/* <input className="edit" value="Create a TodoMVC template" /> */}
          </li>
          {/* Task that are yet to be completed */}
          <Tasks tasks={tasks} />
        </ul>
      </section>
    </>
  )
}

export default MainSection
