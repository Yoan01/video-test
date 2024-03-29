
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VideoUseCases } from '../use-cases/video/video.use-case';
import { CreateVideoDto, UpdateVideoDto } from 'src/core/dtos/video.dto';
@Controller('api/video')
export class VideoController {
  constructor(private videoUseCases: VideoUseCases) { }

  @Get()
  async getAll() {
    return this.videoUseCases.getAllVideos();
  }
  

  @Get(':id')
  async getVideoById(@Param('id') id: string) {
    return this.videoUseCases.getVideoById(id);

  }

  
  @Post(':id')
  async postVideo(@Param('id') id: string, @Body() video: CreateVideoDto) {
    return this.videoUseCases.createVideo(video);
  }

  @Put(":id")
  async putVideo(@Param('id') id: string, @Body() video: UpdateVideoDto) {
    return this.videoUseCases.updateVideo(id, video);
  }


  @Delete(':id')
  async deleteVideo(@Param('id') id: string) {
    return this.videoUseCases.deleteVideo(id);
  }

  @Get(':tag')
  async getVideoByTag(@Param('tag') tag: string) {
    return this.videoUseCases.getVideosByTag(tag);

  }

  @Get(':title')
  async getVideoByTitle(@Param('title') title: string) {
    return this.videoUseCases.getVideoByTitle(title);
  }

  @Get(':description')
  async getVideoByDescription(@Param('description') description: string) {
    return this.videoUseCases.getVideoByDescription(description);
  }

  @Get(':shortDescription')
  async getVideoByShortDescription(@Param('shortDescription') shortDescription: string) {
    return this.videoUseCases.getVideoByShortDescription(shortDescription);
  }

}
