import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http : HttpClient) { }



  public getAllReviews(): Observable <Review[]> {
    return this.http.get<Review[]> (`http://localhost:8090/review/all-reviews`);
  }


  public reviewCampingSpace(review:Review,id:number,idCampingSpace:number):Observable<any>{
      return this.http.post<any> ("http://localhost:8090/review/addandassignreviewtocampingspace/"+id+"/"+idCampingSpace,review);
    }

  public deleteReview(id:number):Observable <Object> {
      return this.http.delete<Object>(`http://localhost:8090/review/delete-review/${id}`);
    }

    public updateReview (id:number , review:Review){
      return this.http.put("http://localhost:8090/review/update-review/"+id,review);
    } 
}
