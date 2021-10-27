import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import{HomepageService} from '../services/homepage.service'

@Component({
  selector: 'app-technologynews',
  templateUrl: './technologynews.component.html',
  styleUrls: ['./technologynews.component.css']
})
export class TechnologynewsComponent implements OnInit {

  constructor(private _service:HomepageService) { }
technewsdisplay:any=[];
  ngOnInit(): void {
this._service.technews().subscribe((result)=>{
this.technewsdisplay=result.articles;
})


  }

}
