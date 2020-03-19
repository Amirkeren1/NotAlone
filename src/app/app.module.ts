import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddComponent} from './compenent/add/add.component'
import {ListComponent} from './compenent/list/list.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { CityComponent } from './compenent/city/city.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    CityComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
