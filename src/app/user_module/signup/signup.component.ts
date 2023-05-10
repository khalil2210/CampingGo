import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/Equipment/Model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();

  page = 4;
  page1 = 5;
  focus!:boolean;
  focus1!:boolean;
  focus2!:boolean;
  date!: {year: number, month: number};
  model!: NgbDateStruct;
  constructor( 
    private renderer : Renderer2,
    private userService: UserService
    ) {}
  isWeekend(date: NgbDateStruct) {
      const d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: {month: number}) {
      return date.month !== current.month;
  }

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
  }

  


  onSubmit(user:User) {
    this.userService.createUser(user).subscribe(
      data => {
        console.log('User created:', data);
        // handle success
      },
      error => {
        console.log('Error creating user:', error);
        // handle error
      }
    );
  }
  

}
