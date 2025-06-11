import { Injectable } from '@nestjs/common';
import { Message } from '../../schemas/Message.model';
import { MessageInput } from '../../libs/dto/message/message.input';
import { ObjectId } from 'mongodb';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class MessageService {
	constructor(private readonly notificationService: NotificationService) {}
	[x: string]: any;
	private messages: Message[] = [];

	createMessage(input: MessageInput): Message {
		const newMessage: Message = {
			_id: new ObjectId(),
			name: input.name,
			email: input.email,
			phone: input.phone,
			message: input.message,
			messageRefId: input.messageRefId,
			// ...(messageRefId && { messageRefId }),
			memberId: new ObjectId(input.memberId),
			createdAt: new Date(),
		};
		this.messages.push(newMessage);
		this.notificationService.create({
			receiverId: input.memberId, // yoki admin ID
			messages: `New message: ${input.message.substring(0, 50)}...`,
		});

		return newMessage;
	}

	findAll(): Message[] {
		return this.messages;
	}
}
