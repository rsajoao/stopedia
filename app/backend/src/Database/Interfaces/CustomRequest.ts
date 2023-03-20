import { Request } from 'express';
import { UserPayload } from './JWT';

export default interface CustomRequest extends Request {
  userData?: UserPayload;
}
