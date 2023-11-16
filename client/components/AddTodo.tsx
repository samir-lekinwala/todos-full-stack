import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addTodoApi } from '../apis/tasksapi'
import { NewTask } from '../models/TasksModel'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const mutateAddTask = useMutation({
    mutationFn: (task: NewTask) => addTodoApi(task),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    },
  })

  const queryClient = useQueryClient()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const task = form.get('newTodo')?.valueOf() as string
    const newTodo = { task: task, completed: false }

    mutateAddTask.mutate(newTodo)
    e.currentTarget.reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          // autoFocus={true}
          name="newTodo"
        />
      </form>
    </>
  )
}

export default AddTodo
