import { IGenericRepository, Video } from "src/core";

export abstract class AbsVideoService extends IGenericRepository<Video> {

    abstract getVideosByTag(tag: string): Promise<Video[]>;

    abstract searchVideos(searchString: string): Promise<Video[]> 
    
    }