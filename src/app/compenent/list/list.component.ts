import { Component, OnInit } from '@angular/core';
import {StoreService} from 'src/app/store.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public list 

goToLink(url: string){
  window.open(url, "");
}
  constructor(private _location: Location,public router:Router,public _ss:StoreService, public r:Router) { }

  ngOnInit() {
    this._ss.getHome().subscribe(
      res=>{
        this.list=res
        console.log(res)
      },
      err=>{console.log(err)}
    )


  }
 

  }
