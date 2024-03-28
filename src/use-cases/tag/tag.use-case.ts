import { Injectable } from '@nestjs/common';
import { Tag } from '../../core/entities';
import { IDataServices } from '../../core';
import { CreateTagDto, UpdateTagDto } from '../../core/dtos';
import { TagFactoryService } from './tag-factory.service';

@Injectable()
export class TagUseCases {
    constructor(
        private dataServices: IDataServices,
        private authorFactoryService: TagFactoryService,
    ) { }

    getAllTags(): Promise<Tag[]> {
        return this.dataServices.tags.getAll();
    }

    getTagById(id: any): Promise<Tag> {
        return this.dataServices.tags.get(id);
    }

    createTag(createTagDto: CreateTagDto): Promise<Tag> {
        const author = this.authorFactoryService.createNewTag(createTagDto);
        return this.dataServices.tags.create(author);
    }

    updateTag(
        authorId: string,
        updateTagDto: UpdateTagDto,
    ): Promise<Tag> {
        const author = this.authorFactoryService.updateTag(updateTagDto);
        return this.dataServices.tags.update(authorId, author);
    }
}
