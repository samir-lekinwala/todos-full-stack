import AddTodo from './AddTodo.tsx'
import Footer from './Footer.tsx'
import MainSection from './MainSection.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <>
        {/* <section className="main"> */}
        <MainSection />
      </>
      {/* </section> */}
      {/* <footer className="footer"></footer> */}
      <Footer />
    </>
  )
}

export default App
