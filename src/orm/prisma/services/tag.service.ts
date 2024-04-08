// @Get(':title')
// async getTagsByTitle(@Param('title') title: any) {
//   return this.tagUseCases.getTagsByTitle(title);
// }

import { Tag } from "src/core";
import { PrismaGenericRepository } from "../generique-repo";
import { PrismaClient } from "@prisma/client";
import { AbsTagService } from "src/core/abstract/service/tag-service.abstract";

export class TagService extends PrismaGenericRepository<Tag> implements AbsTagService {
    constructor(prismaClient: PrismaClient) {
        super(prismaClient, 'tag');
    }

    private get client() {
        return this._client;
    }

    async getByTitle(title: string): Promise<Tag[]> {
        return await this.client.tag.findMany({
            where: {
                titre: {
                    contains: title,
                },
            },
        });
    }

}
