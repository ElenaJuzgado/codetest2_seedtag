import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CoordinatesDto } from './coordinates.dto';
import { EnemiesDto } from './enemies.dto';

export class ScanDto {
  @ApiProperty()
  coordinates: CoordinatesDto;

  @ApiProperty()
  enemies: EnemiesDto;

  @ApiProperty()
  @IsOptional()
  allies?: number;
}
