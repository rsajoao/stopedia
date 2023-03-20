import { Role } from "../Types/Types";

export interface UserPayload {
  id: number;
  username: string;
  email: string;
  role: Role;
}
