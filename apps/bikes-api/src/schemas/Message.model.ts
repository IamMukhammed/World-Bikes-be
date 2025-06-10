import { Schema } from 'mongoose';
import { MessageGroup, MessageStatus, MessageType } from '../libs/enums/message.enum';

const MessageSchema = new Schema(
	{
		messageType: {
			type: String,
			enum: MessageType,
			required: true,
		},

		MessageStatus: {
			type: String,
			enum: MessageStatus,
			default: MessageStatus.WAIT,
		},

		messageGroup: {
			type: String,
			enum: MessageGroup,
			required: true,
		},

		messageDesc: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},

		receiverId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},

		propertyId: {
			type: Schema.Types.ObjectId,
			ref: 'Property',
		},

		// articleId: {
		//     type: Schema.Types.ObjectId,
		//     ref: 'BoardArticle',
		// },
	},
	{ timestamps: true, collection: 'message' },
);

export default MessageSchema;
