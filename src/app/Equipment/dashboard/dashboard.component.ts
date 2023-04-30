import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Equipment } from '../Model/Equipment';
import { EquipmentService } from '../service/equipment.service';
import { ImageserviceService } from '../service/imageservice.service';
import { HttpClient } from '@angular/common/http';
import { Image } from '../Model/Image';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
liste:Equipment[]=[]
equipe=new Equipment()
img1=new Image()
  constructor(private s :EquipmentService,private rouetr:Router,
    private img:ImageserviceService,
    private http:HttpClient,
   ) { }

  ngOnInit(): void {
    // this.getall()
  }
  all:any


addUserForm=new FormGroup({
  id: new FormControl('',Validators.required),
  name: new FormControl('',Validators.required),
  quantity: new FormControl('',Validators.required),
  description: new FormControl('',Validators.required),

 image_id:new FormControl('',Validators.required),
  price: new FormControl('',Validators.required),
  equipmentType: new FormControl('',[Validators.required]),
  imageData: new FormControl('',[Validators.required]),
  user_id: new FormControl('',[Validators.required]),

})


imgURL:any
msg:any
fileName!: string;
group:any
selectedFile!: File ;

onFileSelected(event:any) {
  this.selectedFile = event.target.files[0];
}
num:any


id_user:any


upload(equipment: Equipment) {
  const formData = new FormData();
   formData.append('file', this.selectedFile);

// for(const us of this.listeUsers){
//      this.id_user=us.id
// console.log(this.id_user);
// }
    this.img.ajouterimage(formData).subscribe(
      (data) => {
        this.s.ajouterequipment(equipment,data.id).subscribe(data => {

        console.log(data);
      },(error:Image)=>{
        console.log(error);
      }
    );
    alert("ajouter avec success")
    this.rouetr.navigate(['/home'])
  });
}



getid(eq:number){
   return eq;
 }
}
