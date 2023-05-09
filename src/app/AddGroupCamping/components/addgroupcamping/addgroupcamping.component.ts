import { Component, OnInit } from '@angular/core';
import { AddgroupcampingService } from '../../services/addgroupcamping.service';
import { GroupCamping } from 'src/app/Model/groups';

@Component({
  selector: 'app-addgroupcamping',
  templateUrl: './addgroupcamping.component.html',
  styleUrls: ['./addgroupcamping.component.css']
})
export class AddgroupcampingComponent implements OnInit {

  camping=new GroupCamping()

  constructor(private service : AddgroupcampingService) { }

  ngOnInit(): void {
   

  }


  addGroupCamping(x:GroupCamping){
    this.service.addGroupCamping(x).subscribe((data:any) =>{
 console.log(data);
 
    }
    )
  }

}
