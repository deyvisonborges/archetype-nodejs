import { NextFunction, Request, Response } from 'express'

export type RouteProps = {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete'
  route: string
  controller: (
    req: Request,
    res: Response,
    next?: NextFunction
  ) => Promise<void> | void | null
}[]

export const routes: RouteProps = [
  {
    method: 'get',
    route: '',
    controller: () => null
  }
]
