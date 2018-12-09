import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //title = 'my-app';
  name:string;

  constructor(public commonService:CommonService, 
    public router:Router){

  }

  ngOnInit(){

  }

  login(){
    this.commonService.isLoggedIn=true;
    this.router.navigate(['/reactiveForm']);
  }
}
