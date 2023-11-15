// eslint-disable-next-line no-unused-vars
function AddTodo() {
  function handleSubmit(e) {
    e.preventDefault()
    const result = e.target
    console.log(result)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          name="newTodo"
        />
      </form>
    </>
  )
}

export default AddTodo
