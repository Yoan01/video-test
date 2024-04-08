import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTagDto {
  @ApiProperty({ description: 'Le titre du tag', example: 'Technologie' })
  @IsString()
  @IsNotEmpty()
  titre: string;
}

export class UpdateTagDto {
  @ApiProperty({ description: 'Le nouveau titre du tag', example: 'Science', required: false })
  @IsString()
  @IsNotEmpty()
  titre?: string;
}