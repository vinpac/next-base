import express from 'express'
import expressGraphQL from 'express-graphql'
import next from 'next'
import path from 'path'
import bodyParser from 'body-parser'
import schema from './graphql'
import { dev } from './constants'

const port = process.env.PORT || 3000
const useNext = !process.env.DISABLE_NEXT
let app
let handle

const runServer = () => {
  const server = express()

  // Body parser
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())

  server.use(
    '/graphql',
    expressGraphQL(req => ({
      schema,
      graphiql: dev,
      context: {
        req,
      },
      pretty: dev,
    })),
  )
  server.use(express.static(path.resolve('public')))

  if (useNext) {
    require('./routes').default(app, server)

    server.get('*', (req, res) => handle(req, res))
  }

  server.listen(port, () => console.info(`> Ready on http://localhost:${port}`))
}

if (useNext) {
  app = next({ dir: 'src', dev, quiet: true })
  handle = app.getRequestHandler()
  app.prepare().then(runServer)
} else {
  runServer()
}
