import bodyParser from 'body-parser'
import express from 'express'

export class SetupServer {
  private app
  private port: number

  constructor(port: number) {
    this.app = express()
    this.port = port
  }

  init() {
    this.configs()
    this.routes()
    this.app.listen(this.port)
  }

  configs() {
    this.app.use(bodyParser.json())
  }

  routes() {
    this.app.use('/', (req, res) => {
      res.send('meu ovooo')
    })
  }
}
