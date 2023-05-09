import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User }  from '../Equipment/Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   apiUrl = 'http://localhost:8090/users/all';


  private baseUrl = 'http://localhost:8090/api/auth/signup';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    const url = 'http://localhost:8090/api/auth/signup';
    return this.http.post<User>(url, user);}

   getUsers(): Observable<User> {
    return this.http.get<User>("http://localhost:8090/api/auth/getallUsers");
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8090/users/get-user-by-id/${id}`);
  }

  }
