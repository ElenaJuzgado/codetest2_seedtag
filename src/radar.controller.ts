import { Body, Controller, Post } from '@nestjs/common';
import { CreatePointDto } from './dto/create-point.dto';
import { Coordinates } from './interfaces/coordinates.interface';
import { RadarService } from './radar.service';

@Controller()
export class RadarController {
  constructor(private readonly radarService: RadarService) {}

  @Post('/radar')
  async create(@Body() createPointDto: CreatePointDto): Promise<Coordinates> {
    return this.radarService.create(createPointDto);
  }
}
