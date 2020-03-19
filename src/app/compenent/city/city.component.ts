import { Component, OnInit } from '@angular/core';
import {StoreService} from 'src/app/store.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
public city
public list
  constructor( public route: ActivatedRoute, private _location: Location,public router:Router,public _ss:StoreService, public r:Router) { }

  ngOnInit() {
    debugger
    this.city = this.route.snapshot.url[0].path
console.log(this.route.snapshot.url[0].path)

    this._ss.find(this.city).subscribe(
      res => {
      this.list= res
        console.log(res)
       
    
      },
      err => { console.log(err) }
    )
  }

}
