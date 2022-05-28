import { Document } from "mongoose";


export interface IComment extends Document{
    
    readonly name: string;

    readonly comment: string;

    readonly email: string;

    readonly date_create: Date;

}