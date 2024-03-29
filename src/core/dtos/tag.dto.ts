import { IsString, IsNotEmpty } from 'class-validator';
import { CreateVideoDto } from './video.dto';

export class CreateTagDto {


  @IsString()
  @IsNotEmpty()
  titre: string;

  videos: CreateVideoDto[];
}

export class UpdateTagDto {
  @IsString()
  @IsNotEmpty()
  titre?: string;

  videos?: CreateVideoDto[];
}