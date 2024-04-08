import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Mot de passe de l’utilisateur', example: 'password123' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: 'Nom d’utilisateur', example: 'johndoe' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: 'Identifiant du rôle de l’utilisateur', example: 'roleId123' })
  @IsString()
  @IsNotEmpty()
  roleId: string;
}

export class UpdateUserDto {
  @ApiProperty({ description: 'Nouveau mot de passe de l’utilisateur', example: 'newpassword123', required: false })
  @IsString()
  @IsNotEmpty()
  password?: string;

  @ApiProperty({ description: 'Nouveau nom d’utilisateur', example: 'janedoe', required: false })
  @IsString()
  @IsNotEmpty()
  username?: string;

  @ApiProperty({ description: 'Nouvel identifiant du rôle de l’utilisateur', example: 'newRoleId123', required: false })
  @IsString()
  @IsNotEmpty()
  roleId?: string;
}