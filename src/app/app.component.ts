import { Component } from '@angular/core';
import {StoreService} from 'src/app/store.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  public list 
public city 
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

     onChange(value) {
      this.r.navigateByUrl("/"+ value);
  
    
  }
 
}
