import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = Users & Document;

@Schema()
export class Users{

    @Prop()
    username: string;

    @Prop()
    firstname: string;

    @Prop()
    lastname: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    role: string;

    @Prop()
    date_creation: string;

}

export const User = SchemaFactory.createForClass(Users);