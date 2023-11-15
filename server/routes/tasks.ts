import express from 'express'
import { addTodo, deleteTodo, getTodos, updateTodo } from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const todos = await getTodos()
    res.json(todos)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'woopsie server error' })
  }
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await deleteTodo(id)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'woopsie server error' })
  }
})
router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const data = req.body
  // console.log(data)
  try {
    await updateTodo(id, data)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'woopsie server error' })
  }
})
router.post('/', async (req, res) => {
  const data = req.body
  // console.log(data)
  try {
    await addTodo(data)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'woopsie server error' })
  }
})

export default router
