import { IGenericRepository, Video } from "src/core";

export abstract class AbsVideoService extends IGenericRepository<Video> {

    abstract getVideosByTag(tag: string): Promise<Video[]>;

    abstract getVideoByTitle(title: string): Promise<Video[]>;

    abstract getVideoByDescription(description: string): Promise<Video[]>;

    abstract getVideoByShortDescription(shortDescription: string): Promise<Video[]>;
    
    }