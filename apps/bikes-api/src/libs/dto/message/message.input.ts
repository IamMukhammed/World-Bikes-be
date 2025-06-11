import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class MessageInput {
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
	memberId?: string; // String formatda qabul qilamiz, keyin service ichida ObjectId ga aylantiramiz
}
