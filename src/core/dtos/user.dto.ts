import { IsString, IsNotEmpty } from 'class-validator';
export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  roleId: string;
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  password?: string;

  @IsString()
  @IsNotEmpty()
  username?: string;

  @IsString()

  @IsString()
  @IsNotEmpty()
  roleId?: string;
}
