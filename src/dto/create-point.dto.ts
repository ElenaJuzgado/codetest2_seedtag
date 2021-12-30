import { ApiProperty } from '@nestjs/swagger';
import { ScanDto } from './radarScan.dto';
import { Protocols } from '../interfaces/radar.interface';

export class CreatePointDto {
  @ApiProperty()
  protocols: Protocols;

  @ApiProperty()
  scan: ScanDto[];
}
