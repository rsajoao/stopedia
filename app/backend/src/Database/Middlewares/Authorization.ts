import { NextFunction, Response } from 'express';
import { verifyToken  } from '../Auth/jsonwebtokenfunctions';
import CustomRequest from '../Interfaces/CustomRequest';

export default function Authorization(req: CustomRequest, res: Response, next: NextFunction) {
  try {
    const { headers: { authorization } } = req;

    if (!authorization) {
      return res.status(401).json({ message: 'Authentication token is missing' });
    }

    const { id, username, email, role } = verifyToken(authorization);

    req.userData = { id, username, email, role };

    next();
  } catch (error) {
    return res.status(401).json({ message: (error as Error).message });
  }
}