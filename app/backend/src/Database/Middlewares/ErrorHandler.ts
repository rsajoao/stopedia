import { NextFunction, Request, Response } from 'express';

export default class {
  public static handler(error: Error, _req: Request, res: Response, next: NextFunction) {
    let code: number;

    const { message } = error;

    switch (message) {
      default:
        code = 500;
    }

    res.status(code).json({ message });

    next();
  }
}
