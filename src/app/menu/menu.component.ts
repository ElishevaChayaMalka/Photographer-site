import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  addFeedback:string|undefined
date: Date =new Date();

  constructor(private router: Router,public ser:MyServiceService) {
    // this.y=this.ser.getGift.getValue();
    this.ser.getGift.subscribe(val => {
      this.addFeedback=val;
    });
  }
  ngOnInit(): void {
    // this.router.navigate(['about']);  
    this.router.navigate(['home']);
  }
  openServices() {
    this.router.navigate(['services']);
  }

}
