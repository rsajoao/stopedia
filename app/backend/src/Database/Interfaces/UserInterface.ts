import { Role } from '../Types/Types';

export default interface IUser {
  id: number;
  username: string;
  email: string;
  role: Role;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
