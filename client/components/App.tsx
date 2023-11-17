import { useQuery } from '@tanstack/react-query'
import AddTodo from './AddTodo.tsx'
import Footer from './Footer.tsx'
import MainSection from './MainSection.tsx'
import { getAllTasksApi } from '../apis/tasksapi.ts'

function App() {
  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: getAllTasksApi,
  })
  if (isLoading) return <h1>Loading...</h1>
  if (isError) return console.error(error)

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <>
        {/* <section className="main"> */}
        <MainSection tasks={tasks} />
      </>
      {/* </section> */}
      {/* <footer className="footer"></footer> */}
      <Footer tasks={tasks} />
    </>
  )
}

export default App
