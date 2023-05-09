import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User }  from '../Equipment/Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8090/api/auth/signup';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    const url = 'http://localhost:8090/api/auth/signup';
    return this.http.post<User>(url, user);}
  }
