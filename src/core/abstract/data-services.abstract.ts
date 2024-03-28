import { Video, User, Role, Tag } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract users: IGenericRepository<User>;

  abstract roles: IGenericRepository<Role>;

  abstract tags: IGenericRepository<Tag>;

  abstract videos: IGenericRepository<Video>;
}
