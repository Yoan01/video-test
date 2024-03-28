import { Injectable } from '@nestjs/common';
import { Video } from '../../core/entities'; // Assuming the existence of a Video entity
import { CreateVideoDto, UpdateVideoDto } from '../../core/dtos';

@Injectable()
export class VideoFactoryService {
    createNewVideo(createVideoDto: CreateVideoDto) {
        const newVideo = new Video();
        newVideo.name = createVideoDto.name;
        newVideo.title = createVideoDto.title;
        newVideo.shortDescription = createVideoDto.shortDescription;
        newVideo.description = createVideoDto.description;
        newVideo.tags = createVideoDto.tags;
        newVideo.tagId = createVideoDto.tagId;

        return newVideo;
    }

    updateVideo(updateVideoDto: UpdateVideoDto) {
        const newVideo = new Video();
        newVideo.name = updateVideoDto.name;
        newVideo.title = updateVideoDto.title;
        newVideo.shortDescription = updateVideoDto.shortDescription;
        newVideo.description = updateVideoDto.description;
        newVideo.tags = updateVideoDto.tags;
        newVideo.tagId = updateVideoDto.tagId;

        return newVideo;
    }
}
