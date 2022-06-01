import { RouteProps } from '@src/routes'
import bodyParser from 'body-parser'
import express from 'express'

export class SetupServer {
  private app
  private port: number
  private routes: RouteProps

  constructor(options: { port: number; routes: RouteProps }) {
    this.app = express()
    this.port = options.port
    this.routes = options.routes
  }

  init() {
    this.configs()
    this.router()
    this.app.listen(this.port)
  }

  configs() {
    this.app.use(bodyParser.json())
  }

  router() {
    this.routes.forEach((route) => {
      this.app[route.method](route.route, route.controller)
    })
  }
}
