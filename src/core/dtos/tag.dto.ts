/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';
import { CreateVideoDto } from './video.dto';

export class CreateTagDto {


  @IsString()
  @IsNotEmpty()
  titre: string;

  video: CreateVideoDto[];
}

export class UpdateTagDto {
  @IsString()
  @IsNotEmpty()