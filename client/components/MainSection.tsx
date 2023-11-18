// import React from 'react'
import { getAllTasksApi, updateTodoApi } from '../apis/tasksapi'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as models from '../models/TasksModel'
import Tasks from './Tasks.tsx'
import { useState } from 'react'

interface Props {
  tasks: models.Task
}

function MainSection(props: Props) {
  const [currentTask, setCurrentTask] = useState()

  const tasks = props.tasks

  // const [check, setChecked] = useState(false)

  // const mutateUpdateTask = useMutation({
  //   mutationFn: (updatedTask: models.Task) => updateTodoApi(updatedTask),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(['tasks'])
  //   },
  // })

  const queryClient = useQueryClient()

  // function handleCheck(task: models.Task) {
  //   // e.preventDefault()
  //   setCurrentTask(task)
  //   console.log(currentTask?.id)
  //   // console.log(currentTask)

  //   // mutateUpdateTask.mutate()
  //   // console.log('check check')
  //   // setChecked(!check)
  // }

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
            <div className="view">
              {tasks.map((task: models.Task) =>
                task.completed ? (
                  <div key={task.id}>
                    <input
                      // onClick={() => handleCheck(task)}
                      className="toggle"
                      type="checkbox"
                      checked
                    />
                    <label>{task.task}</label>
                    <button className="destroy"></button>
                  </div>
                ) : null
              )}
            </div>
            {/* <input className="edit" value="Create a TodoMVC template" /> */}
          </li>
          {/* Task that are yet to be completed */}
          <Tasks tasks={props.tasks} />
        </ul>
      </section>
    </>
  )
}

export default MainSection
