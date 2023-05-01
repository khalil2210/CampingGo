export class Post {
    id!: number;
    title!: string;
    content!: string;
    image!: Image;
    authorId!: number;
    creationDate!: Date;

  
    // constructor(
    //     id: number,
    //     title: string,
    //     content: string,
    //     image: string,
    //     authorId: number,
    //     creationDate: Date,
        
    //   ) {
    //     this.id = id;
    //     this.title = title;
    //     this.content = content;
    //     this.image = image;
    //     this.authorId = authorId;
    //     this.creationDate = creationDate;
  
    //   }

}

export class Image {
    id!: number;
}