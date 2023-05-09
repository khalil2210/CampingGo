import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../Model/LoginRequest';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { JwtResponse } from '../Model/JwtResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private AuthService:AuthService) { }

  ngOnInit(): void {
  }
  userid!:number

  loginRequest: LoginRequest = new LoginRequest();
  onSubmit(ngform: NgForm) {
    this.AuthService.login(ngform.value).subscribe(
      (data:JwtResponse) => {
        this.userid=data.id
        localStorage.setItem("accessToken",data.accessToken)
        localStorage.setItem("id",data.id.toString())
        localStorage.setItem("roles",JSON.stringify(data.roles))
        console.log('Login successful:', data);
        if (data.roles.includes('ROLE_ADMIN')) {
          this.AuthService.setIsLoggedIn(true)
          this.AuthService.setToken(data.accessToken)
          this.router.navigate(['/add/ajouter']);
        } else if(data.roles.includes('ROLE_USER')){
          this.router.navigate(['/home']);
          this.AuthService.setToken(data.accessToken)
        }
      
      },
      error => {
        console.log('Login failed:', error);
        // TODO: Display an error message to the user
      }
    );
  }

  }

