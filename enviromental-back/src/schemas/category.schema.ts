import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type CategoryDocument = Categories & Document;

@Schema()
export class Categories{

    @Prop()
    name: string;

    @Prop()
    description: string;

}

export const Category = SchemaFactory.createForClass(Categories);