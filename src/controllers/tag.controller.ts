/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { UserUseCases } from '../use-cases/tag/tag.use-case.ts';

@Controller('api/tag')
export class TagController {
  constructor(private tagUseCases: TagUseCases) { }

  @Get()
  async getAll() {
    return this.tagUseCases.getAllTags();
  }
  @Get(':title')
  async getByTitle(@Param('title') title: any) {
    return this.titleUseCases.getUserByUsername(title);
  }

}
