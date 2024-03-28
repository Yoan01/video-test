/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Put } from '@nestjs/common';
import { TagUseCases } from '../use-cases/tag/tag.use-case.ts';

@Controller('api/tag')
export class TagController {
  constructor(private tagUseCases: TagUseCases) { }

  @Get()
  async getAllTags() {
    return this.tagUseCases.getAllTags();
  }
  @Get(':title')
  async getTagsByTitle(@Param('title') title: any) {
    return this.tagUseCases.getTagsByTitle(title);
  }

  @Get(':id')
  async getTagsById(@Param('id') id: any) {
    return this.tagUseCases.getTagsById(id);
  }

// @Put()
// async createTag(@Body() tag: any) {

// }
