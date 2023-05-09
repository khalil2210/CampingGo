import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {

  private baseUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  public getSentiment(text: string): Observable<string> {
    const headers={
      'Content-Type': 'text/plain'
    }
    return this.http.get<string>(`${this.baseUrl}/sentiment?text=${text}`,{headers});
  }

}
