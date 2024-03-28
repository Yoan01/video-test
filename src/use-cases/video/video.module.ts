import { Module } from '@nestjs/common';
import { VideoFactoryService } from './video-factory.service';
import { VideoUseCases } from './video.use-case';
import { PrismaDataServicesModule } from 'src/orm/prisma/prisma-module.module';

@Module({
  imports: [PrismaDataServicesModule],
  providers: [VideoFactoryService, VideoUseCases],
  exports: [VideoFactoryService, VideoUseCases],
})
export class VideoModule {}
