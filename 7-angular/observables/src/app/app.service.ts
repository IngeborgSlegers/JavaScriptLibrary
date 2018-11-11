import { Injectable } from '@angular/core';
import { interval, Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private dbUrl = 'http://local:3000/'

  constructor(private http: HttpClient) { }

  // getseconds(){
  //   let secondsPast = interval(1000);
  //   return secondsPast.subscribe(x => console.log(`${x} seconds have past`))
  // }

  // getNames(){
  //   const list = new Observable((observer) => {
  //     let people = ['Autumn', 'Tom', 'Dave'];
  //     people.forEach(person => observer.next(person))
  //   })
  //   return list
  // }

  getProducts(){
    // return fetch(this.dbUrl)
    return this.http.get<any>(this.dbUrl)
  }
}
