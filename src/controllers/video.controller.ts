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
  async getByTag(@Param('tag') tag: any) {
    return this.videoUseCases.getUserByTag(tag);

  }
  @Get(':title')
  async getByTitle(@Param('title') title: any) {
    return this.videoUseCases.getUsersByTitle(title);
  }

  @Get(':description')
  async getByDescription(@Param('description') description: any) {
    return this.videoUseCases.getUserByDescription(description);
  }

  @Get(':shortDescription')
  async getByShortDescription(@Param('shortDescription') shortDescription: any) {
    return this.videoUseCases.getUserByShortDescription(shortDescription);
  }
}
