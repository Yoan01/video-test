import { Injectable } from '@nestjs/common';
import { Tag } from '../../core/entities';
import { CreateTagDto, UpdateTagDto } from '../../core/dtos';

@Injectable()
export class TagFactoryService {
    createNewTag(createTagDto: CreateTagDto) {
        const newTag = new Tag();
        newTag.id = createTagDto.id;
        newTag.titre = createTagDto.titre;
        newTag.video = createTagDto.video;


        return newTag;
    }

    updateTag(updateTagDto: UpdateTagDto) {
        const newTag = new Tag();

        newTag.titre = updateTagDto.titre;
        newTag.video = updateTagDto.video;

        return newTag;
    }
}
