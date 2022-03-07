import { Request, Response } from 'express'

export const PersonalDataController = (req: Request, res: Response) => {
  return res.json({
    _id: 1,
    test: 'ok'
  })
}
