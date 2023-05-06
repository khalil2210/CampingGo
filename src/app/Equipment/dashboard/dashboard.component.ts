import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Equipment } from '../Model/Equipment';
import { EquipmentService } from '../service/equipment.service';
import { ImageserviceService } from '../service/imageservice.service';
import { HttpClient } from '@angular/common/http';
import { Image } from '../Model/Image';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Chart, ChartItem } from 'chart.js';
import { saveAs } from 'file-saver';
import { PdfService } from '../service/pdf.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
liste:Equipment[]=[]
equipe=new Equipment()
img1=new Image()
  id=0;
  constructor(private s :EquipmentService,private router:Router,
    private img:ImageserviceService,
    private http:HttpClient,
    private AuthService:AuthService,
    private pdf:PdfService

   ) { }
data!: any[]

  ngOnInit(): void {

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
// createPdf1() {
//   this.http.post('http://localhost:8090/getpdf', {contents: ['Hello, world!']}, { responseType: 'arraybuffer' })
//     .subscribe((response: ArrayBuffer) => {
//       const blob = new Blob([response], { type: 'application/pdf' });
//       saveAs(blob, 'example.pdf');
//     });
// }
 name = "My Product";
 quantity = 10;
 image = "https://example.com/product-image.jpg";

  items = [
  { name: "Item 1", quantity: 5, price: 10 },
  { name: "Item 2", quantity: 2, price: 20 },
  { name: "Item 3", quantity: 1, price: 30 }
];

// Calculate the total price
 totalPrice = this.items.reduce((acc, item) => acc + item.quantity * item.price, 0);

// Create contents array with shopping information
 contents = [
  "Shopping report",
  ...this.items.map(item => `${item.name}: ${item.quantity} x ${item.price}$ = ${item.quantity * item.price}$`),
  `Total price: ${this.totalPrice}$`
];
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
    this.router.navigate(['/home'])
  });
}
logout(){
  this.AuthService.logout()
  this.router.navigate(['/login'])
}


getid(eq:number){
   return eq;
 }
}
