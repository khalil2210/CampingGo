import { Image } from "./Image"
import { User } from "./User"




export class Equipment {
  id!: number;
  name!: string;
  description!: string;
  price!: number;
  createdAt!: string;
  updatetime!: string;
  quantity!: number;
  equipmentType!: string;
  user!: User;
  image!: Image;
  likeii!:number;
}

