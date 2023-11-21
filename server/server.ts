import express from 'express'
import * as Path from 'node:path'
import tasks from './routes/tasks'

const server = express()

server.use(express.json())
server.use('/api/v1/todos', tasks)

// if (process.env.NODE_ENV === 'production') {
//   server.use(express.static(Path.resolve('public')))
//   server.use('/assets', express.static(Path.resolve('./dist/assets')))
//   server.get('*', (req, res) => {
//     res.sendFile(Path.resolve('./dist/index.html'))
//   })
// }

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

// if (process.env.NODE_ENV === 'production') {
//   server.use('/assets', express.static('../assets'))
//   server.get('*', (req, res) => {
//     res.sendFile('../index.html')
//   })
// }

export default server
