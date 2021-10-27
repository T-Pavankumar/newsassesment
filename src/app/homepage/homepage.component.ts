import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _services:HomepageService) { }
  // display data
newsdisplay:any =[];


  ngOnInit(): void {

  this._services.news().subscribe((result)=>{
    console.log(result);
    this.newsdisplay = result.articles;
  })
  }
 
}
