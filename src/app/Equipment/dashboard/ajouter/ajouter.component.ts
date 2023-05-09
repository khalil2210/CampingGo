import { Component, OnInit } from '@angular/core';
import { Equipment } from '../../Model/Equipment';
import { EquipmentService } from '../../service/equipment.service';
import { Router } from '@angular/router';
import { ImageserviceService } from '../../service/imageservice.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Image } from '../../Model/Image';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  liste:Equipment[]=[]
  equipe=new Equipment()
  img1=new Image()
    constructor(private s :EquipmentService,private router:Router,
      private img:ImageserviceService,
      private http:HttpClient,
      private AuthService:AuthService

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
      this.img.ajouterimage(formData).subscribe(
        (data) => {
        if (this.AuthService.getIsLoggedIn()) {
          this.id_user= localStorage.getItem("id")
        }
        console.log(this.id_user);
        
          this.s.ajouterequipment1(equipment,data.id,this.id_user).subscribe(data => {

          console.log(data);
        },(error:Image)=>{
          console.log(error);
        }
      );
      alert("ajouter avec success")
      this.router.navigate(['/add/liste'])
    });
  }

}
