import { routes } from '@src/routes'
import bodyParser from 'body-parser'
import express from 'express'

const app = express()

app.use(bodyParser.json())

routes.forEach((route) => {
  app[route.method](route.route, route.controller)
})

export { app }
