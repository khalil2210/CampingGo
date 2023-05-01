import { Image } from "./image";


export class Comment{
    id!:number;
    content!:String;
    createdAt!:String; 
    image!:Image;
    post!:{
        id:number;
    }
    author!:{id:number,
    username:string};

}