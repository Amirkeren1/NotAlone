import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class StoreService {


  constructor(public http: HttpClient) { }

  public getHome() {
    return this.http.get('http://localhost:1000/home')
  }

  public find(city) {
    return this.http.get('http://localhost:1000/home/' + city)

  
  }
}
