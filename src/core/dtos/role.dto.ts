/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateRoleDto {

  @IsString()
  @IsNotEmpty()
  titre: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  users: string[];
}

export class UpdateRoleDto extends PartialType(CreateRoleDto) { }
