import {   Role } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';
import { AbsTagService } from './service/tag-service.abstract';
import { AbsUserService } from './service/user-service.abstract';
import { AbsVideoService } from './service/video-service.abstract';

export abstract class IDataServices {
  abstract users: AbsUserService;

  abstract roles: IGenericRepository<Role>;

  abstract tags: AbsTagService;

  abstract videos: AbsVideoService;
}
