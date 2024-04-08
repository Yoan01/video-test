import { IGenericRepository,  User } from "src/core";

export abstract class AbsUserService extends IGenericRepository<User> {

    abstract getByRoleName(title: string): Promise<User[]>;

    abstract getByUsername(username: string): Promise<User[]>
    
    }