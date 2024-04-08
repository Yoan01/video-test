import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVideoDto {
  @ApiProperty({ description: 'Nom de la vidéo', example: 'Introduction à NestJS' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Titre de la vidéo', example: 'NestJS pour les débutants' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Description courte de la vidéo', example: 'Un rapide aperçu de NestJS.' })
  @IsString()
  @IsNotEmpty()
  shortDescription: string;

  @ApiProperty({ description: 'Description complète de la vidéo', example: 'Ce tutoriel couvre les bases de NestJS.', required: false })
  @IsString()
  description: string;
}

export class UpdateVideoDto {
  @ApiProperty({ description: 'Nouveau nom de la vidéo', example: 'Avancé NestJS', required: false })
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiProperty({ description: 'Nouveau titre de la vidéo', example: 'NestJS pour les pros', required: false })
  @IsString()
  @IsNotEmpty()
  title?: string;

  @ApiProperty({ description: 'Nouvelle description courte de la vidéo', example: 'Plongez plus profondément dans NestJS.', required: false })
  @IsString()
  @IsNotEmpty()
  shortDescription?: string;

  @ApiProperty({ description: 'Nouvelle description complète de la vidéo', example: 'Ce tutoriel avancé explore des concepts plus profonds de NestJS.', required: false })
  @IsString()
  description?: string;
}