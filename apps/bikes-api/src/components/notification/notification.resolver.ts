// import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { NotificationService } from './notification.service';
// import { Notification } from '../../libs/dto/notification/notification';
// import { shapeIntoMongoObjectId } from '../../libs/config';
// import { ObjectId } from 'mongoose';

// @Resolver()
// export class NotificationResolver {
// 	constructor(private readonly notificationService: NotificationService) {}

// 	@Query(() => [Notification])
// 	async getNotificationsByUserId(@Args('userId') userId: string): Promise<Notification[]> {
// 		const id = shapeIntoMongoObjectId(userId);
// 		return await this.notificationService.getNotificationsByUserId(id);
// 	}

// 	@Mutation(() => Boolean)
// 	async markNotificationAsRead(@Args('notificationId') notificationId: string): Promise<boolean> {
// 		const id = shapeIntoMongoObjectId(notificationId);
// 		await this.notificationService.markNotificationAsRead(id);
// 		return true;
// 	}
// }

import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Notification } from '../../schemas/Notification.model';
import { NotificationService } from './notification.service';
import { NotificationInput } from '../../libs/dto/notification/notification.input';
import { ObjectId } from 'mongodb';

@Resolver(() => Notification)
export class NotificationResolver {
	constructor(private readonly notificationService: NotificationService) {}

	@Mutation(() => Notification)
	createNotification(@Args('input') input: NotificationInput): Notification {
		return this.notificationService.create(input);
	}

	@Mutation(() => Notification, { nullable: true })
	markNotificationAsRead(@Args('id', { type: () => String }) id: string) {
		return this.notificationService.markAsRead(new ObjectId(id));
	}

	@Query(() => [Notification])
	notifications(): Notification[] {
		return this.notificationService.findAll();
	}
}
