import { Image } from "./Image";

export class User {
  id!: number;
  username!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  phoneNumber!: number;
  gender!: string;
  roles!: Role[];
  creationDate!: Date;
  updateDate!: Date;
  profileImage!: Image;
  posts!: Post[];
  createdCampingSpace!: CampingSpace[];
  equipment!: Equipment[];
  groupCamping!: GroupCamping[];
  createdGroupCamping!: GroupCamping[];
  chatroomCreated!: Chatroom[];
  chatrooms!: Chatroom[];
  comments!: Comment[];
  campingSpaceReview!: Review[];
  messages!: Message[];
}

export class Role {
  id!: number;
  name!: string;
}


export class Post {
  id!: number;
  title!: string;
  content!: string;
  author!: User;
}

export interface CampingSpace {
  id: number;
  name: string;
  description: string;
  location: string;
  image: Image;
  price: number;
  capacity: number;
  author: User;
}

export interface Equipment {
  id: number;
  name: string;
  description: string;
  image: Image;
  user: User;
}

export interface GroupCamping {
  id: number;
  name: string;
  description: string;
  image: Image;
  owner: User;
  goingUsers: User[];
}

export interface Chatroom {
  id: number;
  name: string;
  createdBy: User;
  chatMessages: ChatMessage[];
}

export interface ChatMessage {
  id: number;
  message: string;
  sender: User;
  chatroom: Chatroom;
}

export interface Comment {
  id: number;
  content: string;
  author: User;
  post: Post;
}

export interface Review {
  id: number;
  rating: number;
  comment: string;
  author: User;
  campingSpace: CampingSpace;
}

export interface Message {
  id: number;
  subject: string;
  body: string;
  sender: User;
  recipient: User;
}
