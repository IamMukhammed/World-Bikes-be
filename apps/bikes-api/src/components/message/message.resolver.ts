import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Message } from '../../schemas/Message.model';
import { MessageService } from './message.service';
import { MessageInput } from '../../libs/dto/message/message.input';

@Resolver(() => Message)
export class MessageResolver {
	constructor(private readonly messageService: MessageService) {}

	@Mutation(() => Message)
	createMessage(@Args('input') input: MessageInput): Message {
		return this.messageService.createMessage(input);
	}

	@Query(() => [Message])
	messages(): Message[] {
		return this.messageService.findAll();
	}
}
