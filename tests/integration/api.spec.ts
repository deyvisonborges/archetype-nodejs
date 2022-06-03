import supertest from 'supertest'
import { app } from '@src/app'

describe('testando api', () => {
  it('GET/', () => {
    const response = supertest(app).get('/')
    console.log(response)
  })
})
