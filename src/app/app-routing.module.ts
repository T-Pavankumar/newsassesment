import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TechnologynewsComponent } from './technologynews/technologynews.component';
import{BusinessComponent} from './business/business.component'

const routes: Routes = [
{path:'',component:HomepageComponent}, //homescreen
{path:'home',component:HomepageComponent}, //home
{path:'technology',component:TechnologynewsComponent}, //technology News
{path:'business',component:BusinessComponent}, //technology News
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
