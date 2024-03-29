import { IsString, IsNotEmpty } from 'class-validator';

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

export class UpdateRoleDto {
  @IsString()
  @IsNotEmpty()
  titre?: string;

  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsString()
  @IsNotEmpty()
  users?: string[];
}
