export interface IRoutes {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch'
  path: string
  controller: CallableFunction
  action: 'all' | 'one' | 'save' | 'remove'
}
