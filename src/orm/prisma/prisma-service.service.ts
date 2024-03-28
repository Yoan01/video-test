import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import { IDataServices } from '../../core';
import { PrismaGenericRepository } from './generique-repo';

@Injectable()
export class PrismaDataServices implements IDataServices, OnApplicationBootstrap {
    private prismaClient: PrismaClient = new PrismaClient();

    users: PrismaGenericRepository<Prisma.UserUncheckedCreateInput, 'user'>;
    roles: PrismaGenericRepository<Prisma.RoleUncheckedCreateInput, 'role'>;
    videos: PrismaGenericRepository<Prisma.VideoUncheckedCreateInput, 'video'>;
    tags: PrismaGenericRepository<Prisma.TagUncheckedCreateInput, 'tag'>;

    onApplicationBootstrap() {
        this.users = new PrismaGenericRepository(this.prismaClient, 'user');
        this.roles = new PrismaGenericRepository(this.prismaClient, 'role');
        this.videos = new PrismaGenericRepository(this.prismaClient, 'video');
        this.tags = new PrismaGenericRepository(this.prismaClient, 'tag');
    }
}
