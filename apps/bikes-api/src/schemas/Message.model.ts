import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongodb';

@ObjectType()
export class Message {
	@Field(() => ID)
	_id: ObjectId;

	@Field()
	name: string;

	@Field()
	email: string;

	@Field()
	phone: string;

	@Field()
	message: string;

	@Field({ nullable: true })
	messageRefId?: string;

	@Field(() => ID, { nullable: true })
	memberId?: ObjectId;

	@Field()
	createdAt: Date;
}
