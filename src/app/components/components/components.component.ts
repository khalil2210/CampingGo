import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Equipment } from 'src/app/Equipment/Model/Equipment';

import { EquipmentService } from '../../Equipment/service/equipment.service';
import { AuthService } from 'src/app/Equipment/service/auth.service';
import { LoginRequest } from 'src/app/Equipment/Model/LoginRequest';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;
    focus!:boolean;
    focus1!:boolean;
    focus2!:boolean;
    date!: {year: number, month: number};
    model!: NgbDateStruct;

    constructor( private renderer : Renderer2,
      private s:EquipmentService,
      private AuthService:AuthService
      ,private router:Router) {}



    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }
    liste:Equipment[]=[]
    host = "http://localhost:8090"
    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
        this.s.getall().subscribe(data=>{
          this.liste=data;
        })

    }
    userdata!:string
    loginRequest: LoginRequest = new LoginRequest();
    onSubmit(ngform:NgForm) {
      this.AuthService.login(ngform.value).subscribe(
        data => {

          console.log('Login successful:', data);
          // TODO: Navigate to the admin dashboard
         if (data.roles) {
          this.router.navigate(['/home'])
         }else{
          this.router.navigate(['/login'])
         }
        },
        error => {
          console.log('Login failed:', error);
          // TODO: Display an error message to the user
        }
      );

    }

    // onRegisterClick() {
    //   this.router.navigate(['/register']);
    // }
    

}
