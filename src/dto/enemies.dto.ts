import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { types } from 'src/interfaces/enemies.interface';

export class EnemiesDto {
  @ApiProperty()
  type: types;

  @ApiProperty()
  @IsNumber()
  number: number;
}
