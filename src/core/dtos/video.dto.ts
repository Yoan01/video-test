/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';
import { CreateTagDto } from './tag.dto';

export class CreateVideoDto {


  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  shortDescription: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  tags: CreateTagDto[];

  @IsString()
  @IsNotEmpty()
  tagId: string;
}



export class UpdateVideoDto {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsString()
  @IsNotEmpty()
  shortDescription?: string;

  @IsString()
  description?: string;

  @IsNotEmpty()
  tags?: CreateTagDto[];

  @IsString()
  @IsNotEmpty()
  tagId?: string;
}
