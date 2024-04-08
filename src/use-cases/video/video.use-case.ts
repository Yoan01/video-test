import { Injectable } from '@nestjs/common';
import { Video } from '../../core/entities';
import { IDataServices } from '../../core';
import { CreateVideoDto, UpdateVideoDto } from '../../core/dtos';
import { VideoFactoryService } from './video-factory.service';

@Injectable()
export class VideoUseCases {
    constructor(
        private dataServices: IDataServices,
        private videoFactoryService: VideoFactoryService,
    ) { }

    getAllVideos(): Promise<Video[]> {
        return this.dataServices.videos.getAll();
    }

    getVideoById(id: any): Promise<Video> {
        return this.dataServices.videos.get(id);
    }

    createVideo(createVideoDto: CreateVideoDto): Promise<Video> {
        const video = this.videoFactoryService.createNewVideo(createVideoDto);
        return this.dataServices.videos.create(video);
    }

    updateVideo(
        videoId: string,
        updateVideoDto: UpdateVideoDto,
    ): Promise<Video> {
        const video = this.videoFactoryService.updateVideo(updateVideoDto);
        return this.dataServices.videos.update(videoId, video);
    }

    deleteVideo(videoId: string): Promise<Video> {
        return this.dataServices.videos.delete(videoId);
    }
    getVideosByTag(tag: string): Promise<Video[]> {
        return this.dataServices.videos.getVideosByTag(tag);
    }

    searchVideos(title: string): Promise<Video[]> {
        return this.dataServices.videos.searchVideos(title);
    }

}
