import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-chatroom',
  templateUrl: './edit-chatroom.component.html',
  styleUrls: ['./edit-chatroom.component.css']
})
export class EditChatroomComponent implements OnInit {

  constructor() { }
  chatroomName?:string;
  imageFile?:any;
  ngOnInit(): void {
  }
  closeDialog(){this}



  onFileSelected(event:any) {
    this.imageFile = event.target.files[0];
  }
}

