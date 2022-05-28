import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type CommentDocument = Comments & Document;

@Schema()
export class Comments{

    @Prop()
    name: string;

    @Prop()
    comment: string;

    @Prop()
    email: string;

    @Prop()
    date_create: Date;

}

export const Comment = SchemaFactory.createForClass(Comments);