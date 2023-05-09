import { Component, OnInit } from '@angular/core';
import { GroupcampingService } from '../../services/groupcamping.service';
import { GroupCamping } from 'src/app/Model/groups';
import { RechercheGpService } from 'src/app/RechercheGp/services/recherche-gp.service';
import { StatServiceService } from 'src/app/stat-service.service';
import { HttpClient } from '@angular/common/http';
//import * as $ from 'jquery'; sont utilisés pour afficger un placeholder dans la combobox
import 'select2';
import { Chart,registerables } from 'chart.js'; // utilisés pour le chart.js(stat)
//import jsPDF from 'jspdf'; pour l'api pdf 

//import * as $ from 'jquery';// utilisé pour le pop up


Chart.register(...registerables);


@Component({
  selector: 'app-all-group-camping',
  templateUrl: './all-group-camping.component.html',
  styleUrls: ['./all-group-camping.component.css']
})
export class AllGroupCampingComponent implements OnInit {

  GroupCamping: GroupCamping[] = []
  camping=new GroupCamping()
  file:any
  totalGroups: number = 0;
  rating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];
  userId=23;

  showContent: boolean = false;
  
  
 
  
  

  campingType: string = '';
   
  title ='dsf';


 

  

  
  
  constructor(private service:GroupcampingService,private rechservice:RechercheGpService , private statService: StatServiceService, private http: HttpClient){ }

  

  ngOnInit(): void {

    this.listGroupCamping()

  }




  onClickShowContent() {
    // Mettez à jour la valeur de la variable pour afficher ou masquer le contenu
    this.showContent = !this.showContent;
  }


  
  listGroupCamping(){
    this.service.listGroupCamping().subscribe((res:any) =>{
      this.GroupCamping=res
      console.log(this.GroupCamping);
      
    }
    )
  }


/* generate a pdf "requirement" 

  generatePDF(){
    var doc =  new jsPDF()
    var content=`

    `The requirement is ${this.camping}
  }

*/



  myChart: any;

  calculateTotalGroups() {
    this.totalGroups = this.statService.count(this.GroupCamping);
    
     // Supprimez l'instance du graphique précédent s'il existe
  if (this.myChart) {
    this.myChart.destroy();
  }

  // Créez une nouvelle instance du graphique avec la nouvelle valeur de this.totalGroups
  this.myChart = new Chart("myChart", {
    type: 'bar',
    data: {
      labels: ['Nombre de Group Camping'],
      datasets: [{
        label: '# Number Of Groups',
        data: [this.totalGroups],
        backgroundColor: ['rgba(255,99,132,0.2)'],
        borderColor: ['rgba(255,99,132,1)'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  } 


/*
  RenderChart(){
    var myChart = new Chart("myChart",{
    type: 'bar',
    data : {
      labels:['Nombre de Group Camping'],
      datasets:[{
        label: '# Number Of Groups',
        data:[this.totalGroups],
        backgroundColor:['rgba(255,99,132,0.2)'],
        borderColor:['rgba(255,99,132,1)'], 
        borderWidth: 1
      }]

    },
    options:{
      scales:{
        y:{
          beginAtZero: true
        }
      }
    }
  });
}*/






/*juste pour le combobox' sui n'a pas marché*/
  initializeCustomSelect() {
    this.campingType = 'placeholder';
  }



  retrievByDestinationGpCamping(destination:any){
    this.service.retrievByDestinationGpCamping(destination).subscribe(data =>{
      this.GroupCamping=data     //on recupere la data --> dans la liste GroupCamping qui se trouve dans le service:GroupcampingService
      console.log(GroupCamping); //pour verifier l'apparence de la liste dans la console du composant groupcamping
      
      this.rechservice.liste=data
      console.log(this.rechservice.liste);
      
    }
    )
  }




  


  rate( item: any) {
    item.rating++
this.service.updateGroupCamping(item).subscribe(data=>{
  data.id=item.id
})

  }
  
  getStarClass(star: number, rating: number) {
    return {
      'star': true,
      'active': star <= rating
    };
  }
  




 /* addGroupCamping(x:GroupCamping){
    this.service.addGroupCamping(x).subscribe((data:any) =>{
      this.GroupCamping.push(data);
    }
    )
  }
 
  */



//appelé dans change de input pour faire l'upload 
  onFileSelected(event:any) {
    this.file = event.target.files[0];
  }

   addGroupCamping (camping:any ,file:any){
  console.log(camping,file);
  this.service.addGroupCamping(camping,file).subscribe(()=>{
  //this.router.navigateByUrl("http://localhost:8090/GroupCamping/addGroupCamping")
  this.ngOnInit();
 })
 }






  

    deleteGroupCamping (id:any,index:number){
      if(confirm('Voulez-vous réelement supprimer ce group ?')){
        this.service.deleteGroupCamping(id).subscribe({ complete:()=>this.GroupCamping.splice(index,1)
      }
      )
    }
    }

  


//update avec image 
  updateGroupCamping1(file:any, updatedGroupCamping: GroupCamping): void {
    this.service.updateGroupCamping1(file, updatedGroupCamping).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }




  listeget= new GroupCamping()
  get(item:any){
    this.listeget=item
    console.log(this.listeget);
  }


  //update sans image 
  updateGroupCamping(updatedGroupCamping: GroupCamping){
    this.service.updateGroupCamping( updatedGroupCamping).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }


  

  addUserToGroup(userId: number, groupId: number) {
    this.service.addUserToGroup(this.userId, groupId).subscribe(
      (response) => {
        // Traitement de la réponse
        console.log('Utilisateur ajouté au groupe avec succès');
      },
      (error) => {
        // Gestion des erreurs
        console.error('Erreur lors de l\'ajout de l\'utilisateur au groupe', error);
      }
    );
  }


  removeUserToGroup(userId: number, groupId: number) {
    this.service.removeUserToGroup(this.userId, groupId).subscribe(
      (response) => {
        // Traitement de la réponse
        console.log('Utilisateur supprimé du groupe avec succès');
      },
      (error) => {
        // Gestion des erreurs
        console.error('Erreur lors de la suppression de l\'utilisateur du groupe', error);
      }
    );
  }
 

  
}