import { InputType, Field } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { MessageGroup, MessageStatus, MessageType } from '../../enums/message.enum';

@InputType()
export class MessageInput {
	@Field(() => MessageType)
	messageType: MessageType;

	@Field(() => MessageStatus, { defaultValue: MessageStatus.WAIT })
	messageStatus?: MessageStatus;

	@Field(() => MessageGroup)
	messageGroup: MessageGroup;

	@Field(() => String)
	messageTitle: string;

	@Field(() => String, { nullable: true })
	messageDesc?: string;

	@Field(() => String)
	authorId: ObjectId;

	@Field(() => String)
	receiverId: ObjectId;

	@Field(() => String, { nullable: true })
	propertyId?: ObjectId;

	// @Field(() => String, { nullable: true })
	// articleId?: ObjectId;
}
