import { User } from "src/core";
import { PrismaGenericRepository } from "../generique-repo";
import { PrismaClient } from "@prisma/client";
import { AbsUserService } from "src/core/abstract/service/user-service.abstract";

export class UserService extends PrismaGenericRepository<User> implements AbsUserService{
    constructor(prismaClient: PrismaClient) {
        super(prismaClient, 'user');
    }

    private get client() {
        return this._client;
    }

    async getByRoleName(roleName: string): Promise<User[]> {
        return this.client.user.findMany({
            where: {
                role: {
                    titre: roleName,
                },
            }
        });
    }
}