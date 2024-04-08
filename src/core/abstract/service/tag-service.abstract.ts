import { IGenericRepository, Tag } from "src/core";

export abstract class AbsTagService extends IGenericRepository<Tag> {

    abstract getByTitle(title: string): Promise<Tag[]>;
    }