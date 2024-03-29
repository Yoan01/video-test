import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TagUseCases } from '../use-cases/tag/tag.use-case';
import { CreateTagDto, UpdateTagDto } from 'src/core/dtos/tag.dto';

@Controller('api/tag')
export class TagController {
  constructor(private tagUseCases: TagUseCases) { }

  @Get()
  async getAll() {
    return this.tagUseCases.getAllTags();
  }

  @Get(':id')
  async getTagById(@Param('id') id: string) {
    return this.tagUseCases.getTagById(id);
  }

  @Post()
  async postTag(@Body() tag: CreateTagDto) {
    return this.tagUseCases.createTag(tag);
  }

  @Put(':id')
  async putTag(@Param('id') id: string, @Body() tag: UpdateTagDto) {
    return this.tagUseCases.updateTag(id, tag);
  }

  @Delete(':id')
  async deleteTag(@Param('id') id: string) {
    return this.tagUseCases.deleteTag(id);
  }
  @Get(':title')
  async getTagsByTitle(@Param('title') title: any) {
    return this.tagUseCases.getTagsByTitle(title);
  }

}