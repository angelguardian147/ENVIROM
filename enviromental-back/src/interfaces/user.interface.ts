import { Document } from "mongoose";


export interface IUser extends Document{

    readonly username: string;

    readonly firstname: string;

    readonly lastname: string;

    readonly email: string;

    readonly password: string;

    readonly role: string;

    readonly date_creation: string;

}