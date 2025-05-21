import { Injectable } from '@nestjs/common';

@Injectable()
export class BikesBatchService {
  getHello(): string {
    return 'Welcome to World Motorcycles BATCH Server !';
  }
}
