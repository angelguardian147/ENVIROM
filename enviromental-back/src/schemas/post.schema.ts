import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { ICategory } from "src/interfaces/category.interface";
import { IComment } from "src/interfaces/comment.interface";
import { IUser } from "src/interfaces/user.interface";

export type PostDocument = Posts & Document;

@Schema()
export class Posts{

    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop()
    image: string;

    @Prop()
    date_creation: string;

    @Prop({type: {}})
    category: ICategory;

    @Prop({type: {}})
    user: IUser;

    @Prop({type: [{}]})
    comments: IComment[];

}

export const Post = SchemaFactory.createForClass(Posts);