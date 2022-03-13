import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  //url
  newsApiUrl='https://newsapi.org/v2/top-headlines?country=in&apiKey=022048e8ef234980a069fa73c04d1c15';
  techNewsUrl='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=022048e8ef234980a069fa73c04d1c15';
  businessNewsUrl='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=022048e8ef234980a069fa73c04d1c15';

  //topHeading()
  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }
//technology news
  techNews():Observable<any>{
    return this._http.get(this.techNewsUrl);
  }

  businessNews():Observable<any>{
    return this._http.get(this.businessNewsUrl);
  }

}
