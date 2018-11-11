import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public word =[] ;
  constructor(public appService: AppService){}

  ngOnInit(){
    this.appService.getProducts().subscribe(res => console.log(res));
    // this.appService.getNames().subscribe(names => this.word.push(names))
  }


}
