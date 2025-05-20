import { Controller, Get } from '@nestjs/common';
import { BikesBatchService } from './bikes-batch.service';

@Controller()
export class BikesBatchController {
  constructor(private readonly bikesBatchService: BikesBatchService) {}

  @Get()
  getHello(): string {
    return this.bikesBatchService.getHello();
  }
}
