import { Role } from "./role.entity";
export class User {
  id: string;
  password?: string;
  username: string;
  role?: Role;
  roleId?: string;
}
