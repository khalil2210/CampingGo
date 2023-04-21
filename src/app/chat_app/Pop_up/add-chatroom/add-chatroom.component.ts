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
  ngOnInit(): void {
  }
  closeDialog(){this}
}

