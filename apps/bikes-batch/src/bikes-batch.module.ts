import { Module } from '@nestjs/common';
import { BikesBatchController } from './bikes-batch.controller';
import { BikesBatchService } from './bikes-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [ConfigModule.forRoot()],
	controllers: [BikesBatchController],
	providers: [BikesBatchService],
})
export class BikesBatchModule {}
