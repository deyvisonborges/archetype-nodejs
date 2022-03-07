import { PersonalDataController } from '@src/controllers/PersonalDataController'
import { IRoutes } from './types'

export const Routes: IRoutes[] = [
  {
    method: 'get',
    path: '/users',
    controller: () => Promise,
    action: 'all'
  },
  {
    method: 'get',
    path: '/users/:id',
    controller: () => null,
    action: 'one'
  },
  {
    method: 'post',
    path: '/users',
    controller: () => null,
    action: 'save'
  },
  {
    method: 'delete',
    path: '/users/:id',
    controller: () => null,
    action: 'remove'
  }
]
