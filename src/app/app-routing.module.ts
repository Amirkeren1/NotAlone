import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './compenent/list/list.component'
import { AddComponent } from './compenent/add/add.component';
import { CityComponent } from './compenent/city/city.component'


const routes: Routes = [
  {path:"",pathMatch:"full", component:ListComponent},
  {path:"add", component:AddComponent},
  {path:"Haifa", component:CityComponent},
  {path:"Tel-Aviv", component:CityComponent},
  {path:"Jerusalem", component:CityComponent},
  {path:"Center", component:CityComponent},
  {path:"North", component:CityComponent},
  {path:"South", component:CityComponent},
  {path:"Shfela", component:CityComponent},
  {path:"HaSharon", component:CityComponent},
  
  {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
