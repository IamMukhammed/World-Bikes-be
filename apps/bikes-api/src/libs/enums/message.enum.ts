import { registerEnumType } from '@nestjs/graphql';

export enum MessageType {
	COMMENT = 'COMMENT',
	CONTACT = 'CONTACT',
}
registerEnumType(MessageType, {
	name: 'MessageType',
});

export enum MessageStatus {
	WAIT = 'WAIT',
	READ = 'READ',
}
registerEnumType(MessageStatus, {
	name: 'MessageStatus',
});

export enum MessageGroup {
	MEMBER = 'MEMBER',
	ARTICLE = 'ARTICLE',
	PROPERTY = 'PROEPRTY',
}
registerEnumType(MessageGroup, {
	name: 'MessageGroup',
});
