import { NextFunction, Response } from 'express';
import CustomRequest from '../Interfaces/CustomRequest';
import { emailRegex, usernameRegex } from '../Utils/Regexes';

export default function validateLoginParams(req: CustomRequest, res: Response, next: NextFunction) {
  const { body: { user, password } } = req;

  const requiredFields = ['user', 'password'];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ message: `"${field}" is required` });
    }
  }

  if ([...user].includes('@') && !emailRegex.test(user))
    return res.status(400).json({ message: 'invalid "email"' });

  if (![...user].includes('@') && !usernameRegex.test(user))
    return res.status(400).json({ message: 'invalid "username"' });

  if (password.length < 6)
    return res.status(400).json({ message: '"password" must contain at leat 6 characters' });


  req.body.user = user.toLowerCase();
  next();  
}
