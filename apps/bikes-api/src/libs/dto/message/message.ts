import { Field, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { Member } from '../member/member';
import { MessageType, MessageStatus, MessageGroup } from '../../enums/message.enum';

@ObjectType()
export class Message {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => MessageType)
	messageType: MessageType;

	@Field(() => MessageStatus)
	messageStatus: MessageStatus;

	@Field(() => MessageGroup)
	messageGroup: MessageGroup;

	@Field(() => String)
	messageTitle: string;

	@Field(() => String)
	messageDesc: ObjectId;

	@Field(() => String)
	authorId: string;

	@Field(() => String)
	receiverId: ObjectId;

	@Field(() => String, { nullable: true })
	proeprtyId: ObjectId;

	// @Field(() => String, { nullable: true })
	// articleId: ObjectId;

	@Field(() => Date)
	creadetAt: Date;

	/** from aggreagtion **/

	@Field(() => Member, { nullable: true })
	memberData?: Member;
}

@ObjectType()
export class Messages {
	@Field(() => [Messages])
	list: Messages[];
}
