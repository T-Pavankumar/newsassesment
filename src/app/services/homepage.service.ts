import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  

  // newsapiUrl: string = 'https://newsapi.org/v2/everything?' +
  // 'q=Apple&' +
  // 'from=2021-10-26&' +
  // 'sortBy=popularity&' +
  // 'apiKey=c1984a2114fc456f88baed189e7fbc59';

  // newsapiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  

  constructor(private _http:HttpClient) { }

  newsapiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c1984a2114fc456f88baed189e7fbc59";
technewsUrl ="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c1984a2114fc456f88baed189e7fbc59";
businessnewsUrl ="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c1984a2114fc456f88baed189e7fbc59";  
//news()
  news(): Observable<any> 
  {
    
    return this._http.get(this.newsapiUrl);
  }
  technews(): Observable<any>
  {
 return this._http.get(this.technewsUrl);
  }

  businessnews(): Observable<any>
  {
    return this._http.get(this.businessnewsUrl);
  }


  
  // private handleError(handleError: any): Observable<any[]> {
  //   throw new Error("Method not implemented.");
  // }
}
