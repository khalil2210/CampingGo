import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtResponse } from '../Model/JwtResponse';
import { LoginRequest } from '../Model/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8090/api/auth/signin';
  private isLoggedIn = "false";
  private  tokenKey!:string;
  public id=0
  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, loginRequest);
  }

  setIsLoggedIn(isLoggedIn: boolean) {
    sessionStorage.setItem(this.isLoggedIn, isLoggedIn.toString());

  }

  getIsLoggedIn(): boolean {
    const isLoggedInString = sessionStorage.getItem(this.isLoggedIn);
    return isLoggedInString ? JSON.parse(isLoggedInString) : false;
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(){
    return localStorage.getItem(this.tokenKey);
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }
  logout() {
    this.removeToken();
    this.setIsLoggedIn(false);
  }
  isAdmin(): boolean {
    const jwtToken = this.getToken();
    if (!jwtToken) {
      return false;
    }
    const jwtData = jwtToken.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);
    const roles: string[] = decodedJwtData.roles;
    return roles.includes('ROLE_ADMIN');
  }
  isUser() {
    const jwtToken = this.getToken();
    if (!jwtToken) {
      return false;
    }
    const jwtData = jwtToken.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const roles=localStorage.getItem("roles")
    return roles;
  }


}
