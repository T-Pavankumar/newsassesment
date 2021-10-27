import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import{HomepageService} from './services/homepage.service';
import { TechnologynewsComponent } from './technologynews/technologynews.component';
import { BusinessComponent } from './business/business.component'



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TechnologynewsComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule,
    AppRoutingModule,
    FormsModule,
    
    
  ],
  providers: [HomepageService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
