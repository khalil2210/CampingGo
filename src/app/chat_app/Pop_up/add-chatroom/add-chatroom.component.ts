import { Component, OnInit } from '@angular/core';
import { MatDialog ,MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-add-chatroom',
  templateUrl: './add-chatroom.component.html',
  styleUrls: ['./add-chatroom.component.css']
})
export class AddChatroomComponent implements OnInit {

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

