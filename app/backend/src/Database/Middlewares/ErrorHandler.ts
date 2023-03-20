import { NextFunction, Request, Response } from 'express';

export default class {
  public static handler(error: Error, _req: Request, res: Response, next: NextFunction) {
    let code: number;

    const { message, stack } = error;

    switch (message) {
      case 'User not found':
        code = 404;
        break;
      case 'Incorrect password':
        code = 401;
        break;
      default:
        code = 500;
    }

    res.status(code).json({ message, stack });

    next();
  }
}
