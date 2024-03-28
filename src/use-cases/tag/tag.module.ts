import { Module } from '@nestjs/common';
import { TagFactoryService } from './tag-factory.service';
import { TagUseCases } from './tag.use-case';
import { PrismaDataServicesModule } from 'src/orm/prisma/prisma-module.module';

@Module({
  imports : [PrismaDataServicesModule],
  providers: [TagFactoryService, TagUseCases],
  exports: [TagFactoryService, TagUseCases],
})
export class TagModule {}
