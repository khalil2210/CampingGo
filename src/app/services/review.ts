import { User } from "../core/model/user";

export class Review{

    id?: number;
    author?:{id:number,
    username?:string};
    reviewTitle?:string;
    reviewText?:string;
    content?: string;
    rating?: number;
    createdAt?: Date;
    campingSpace?:{
        id:number;
    }
   
}