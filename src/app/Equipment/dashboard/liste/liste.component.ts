import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../../service/equipment.service';
import { ImageserviceService } from '../../service/imageservice.service';
import { Equipment } from '../../Model/Equipment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  liste: any[] = []
  equipe = new Equipment()

  constructor(private s: EquipmentService, private img: ImageserviceService,
    private router:Router,
    private routeractice:ActivatedRoute) { }
  host = "http://localhost:8090"
  filterTerm!: string;
  ngOnInit(): void {
    this.upload()
  }
upload() {
    this.s.getall().subscribe(data => {
      this.liste = data
      console.log(data);

    })
  }
  searchText!:string
  get filteredList(): Equipment[] {
    if (!this.searchText) {
      return this.liste;
    }

    return this.liste.filter((item) =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  delete(id: number) {
    let index = this.liste.findIndex(e=>e.id==id)
    if (index !==-1) {
         this.liste.splice(index, 1)
    }
    this.s.delete(id).subscribe()
    
  }

  addUserForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    // date: new FormControl('',Validators.required),
    // photo: new FormControl('',Validators.required),
    image_id: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    equipmentType: new FormControl('', [Validators.required]),
    imageData: new FormControl('', [Validators.required]),
    // image_id: new FormControl('',[Validators.required]),

  })
  selectedFile!: File;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  msg: any
  update(eq: Equipment) {
    this.s.delete(eq.id);
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    // Send the equipment object to the backend
    this.img.ajouterimage(formData).subscribe(
      (data) => {
        this.s.ajouterequipment(eq, data.id).subscribe(data => {
          console.log(data.id);
          alert("Modification terminee !😍")
          console.log(data);
        }, (error) => {
          console.log(error);
          alert("error !😣")
        }
        );
        
        this.router.navigate(['add/liste'])
      });


  }

  public getid(id: number) {
    for (let index = 0; index < this.liste.length; index++) {
      const element = this.liste[index];

      if (element.id == id) {
        this.equipe.id = element.id
        this.equipe.name = element.name
        this.equipe.price = element.price
        this.equipe.quantity = element.quantity
        this.equipe.description = element.description
        this.equipe.equipmentType = element.equipmentType
        this.equipe.image = element.image
        console.log(element.id, id);


      }


    }
    return id
  }

}
