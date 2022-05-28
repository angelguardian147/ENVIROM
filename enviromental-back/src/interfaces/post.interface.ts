import { Document } from "mongoose";
import { ICategory } from "./category.interface";
import { IComment } from "./comment.interface";
import { IUser } from "./user.interface";


export interface IPost extends Document{
    
    title: string;

    content: string;

    image: string;

    date_creation: string;

    category: ICategory;

    user: IUser;

    comments: IComment[];

}