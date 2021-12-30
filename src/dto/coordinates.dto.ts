import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CoordinatesDto {
  @ApiProperty()
  @IsNumber()
  x: number;

  @ApiProperty()
  @IsNumber()
  y: number;
}
