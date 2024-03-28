/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoDto } from './video.dto';

export class CreateTagDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  titre: string;

  video: CreateVideoDto[];
}

export class UpdateTagDto {
  @IsString()
  @IsNotEmpty()
  titre ?: string;

  video ?: CreateVideoDto[];
}