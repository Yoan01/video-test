import { Author, Book, Genre } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract users: IGenericRepository<Author>;

  abstract roles: IGenericRepository<Book>;

  abstract tags: IGenericRepository<Genre>;

  abstract videos: IGenericRepository<Genre>;
}
