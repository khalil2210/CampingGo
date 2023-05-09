export class GroupCamping{
    id:any;
    description:any;
    destination:any;
    carModel:any;
    campingType:any;
    createdAt:any;
    availablePlaces:any;
    requirements:any;
    rating:any
    image!:Image
    
    user!:{
        id:number
    }



}


export class Image{
    id!:number;
}

export class User{
    id!:number
}