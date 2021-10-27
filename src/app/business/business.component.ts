import { Component, OnInit } from '@angular/core';
import {HomepageService} from '../services/homepage.service'

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private _service:HomepageService) { }
businessnewsdisplay:any=[];
  ngOnInit(): void {
this._service.businessnews().subscribe((result)=>{
  this.businessnewsdisplay=result.articles;

})

  }

}
