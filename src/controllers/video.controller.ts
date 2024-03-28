/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { VideoUseCases } from '../use-cases/video/video.use-case.ts';

@Controller('api/video')
export class VideoController {
  constructor(private videoUseCases: VideoUseCases) { }

  @Get()
  async getAll() {
    return this.videoUseCases.getAllVideos();
  }
  @Get(':tag')
  async getVideoByTag(@Param('tag') tag: any) {
    return this.videoUseCases.getVideosByTag(tag);

  }
  @Get(':title')
  async getVideoByTitle(@Param('title') title: any) {
    return this.videoUseCases.getVideoByTitle(title);
  }

  @Get(':description')
  async getVideoByDescription(@Param('description') description: any) {
    return this.videoUseCases.getVideoByDescription(description);
  }

  @Get(':shortDescription')
  async getVideoByShortDescription(@Param('shortDescription') shortDescription: any) {
    return this.videoUseCases.getVideoByShortDescription(shortDescription);
  }
}
