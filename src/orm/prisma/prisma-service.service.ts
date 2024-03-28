import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import { IDataServices } from '../../core';
import { PrismaGenericRepository } from './generique-repo';
import { Role, Video, User, Tag } from "../../core/entities";

@Injectable()
export class PrismaDataServices implements IDataServices, OnApplicationBootstrap {
    private prismaClient: PrismaClient = new PrismaClient();

    users: PrismaGenericRepository<User>;
    roles: PrismaGenericRepository<Role>;
    videos: PrismaGenericRepository<Video>;
    tags: PrismaGenericRepository<Tag>;

    onApplicationBootstrap() {
        this.users = new PrismaGenericRepository(this.prismaClient, 'user');
        this.roles = new PrismaGenericRepository(this.prismaClient, 'role');
        this.videos = new PrismaGenericRepository(this.prismaClient, 'video');
        this.tags = new PrismaGenericRepository(this.prismaClient, 'tag');
    }
}
