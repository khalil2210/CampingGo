import { Component, OnInit } from '@angular/core';
import { GroupCamping } from 'src/app/Model/groups';
import { RechercheGpService } from '../../services/recherche-gp.service';
import { ActivatedRoute } from '@angular/router';
import { GroupcampingService } from 'src/app/GroupCamping/services/groupcamping.service';



@Component({
  selector: 'app-recherche-gp',
  templateUrl: './recherche-gp.component.html',
  styleUrls: ['./recherche-gp.component.css']
})
export class RechercheGpComponent implements OnInit {
  GroupCamping: GroupCamping[] = []
  camping=new GroupCamping()
  destination!:string;


  constructor(private rechservice:RechercheGpService, private service:GroupcampingService, private route: ActivatedRoute) { }

   dest:any[]=[]
   rating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.destination=params['destination']
    });
    this.retrievByDestinationGpCamping(this.destination);
    
  }
  



  
  rate(stars: number, item: any) {
    item.rating = stars;
  }
  
  getStarClass(star: number, rating: number) {
    return {
      'star': true,
      'active': star <= rating
    };
  }



  retrievByDestinationGpCamping(destination:any){
    this.service.retrievByDestinationGpCamping(destination).subscribe(data =>{
      //this.GroupCamping=data     //on recupere la data --> dans la liste GroupCamping qui se trouve dans le service:GroupcampingService
      //console.log(GroupCamping); //pour verifier l'apparence de la liste dans la console du composant groupcamping
      
      this.dest=data
      
    }
    )
  }


  
   
 
}




