import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { IDataServices } from '../../core';
import { PrismaGenericRepository } from './generique-repo';
import { Role } from "../../core/entities";
import { TagService } from './services/tag.service';
import { AbsTagService } from 'src/core/abstract/service/tag-service.abstract';
import { AbsVideoService } from 'src/core/abstract/service/video-service.abstract';
import { VideoService } from './services/video.service';
import { AbsUserService } from 'src/core/abstract/service/user-service.abstract';
import { UserService } from './services/user.service';

@Injectable()
export class PrismaDataServices implements IDataServices, OnApplicationBootstrap {
    private prismaClient: PrismaClient = new PrismaClient();

    users: AbsUserService;
    roles: PrismaGenericRepository<Role>;
    videos: AbsVideoService;
    tags: AbsTagService;

    onApplicationBootstrap() {
        this.users = new UserService(this.prismaClient);
        this.roles = new PrismaGenericRepository(this.prismaClient, 'role');
        this.videos = new VideoService(this.prismaClient);
        this.tags = new TagService(this.prismaClient);
    }
}
