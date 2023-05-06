import { Image } from "./Image"
import { User } from "./User"




export class Equipment {
  id!: number;
  name!: string;
  description!: string;
  price!: number;
  createdAt!: string;
  updatetime!: string;
  quantite_payment!:number;
  quantity!: number;
  equipmentType!: string;
  user!: User;
  rate!:number;
  text!:string;
  image!: Image;
  likeii!:number;
}

