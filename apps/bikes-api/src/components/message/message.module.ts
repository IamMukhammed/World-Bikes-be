import { Module } from '@nestjs/common';
import { MessageResolver } from './message.resolver';
import { MessageService } from './message.service';
import { NotificationModule } from '../notification/notification.module';

@Module({
    imports: [NotificationModule],
	providers: [MessageResolver, MessageService],
})
export class MessageModule {}
