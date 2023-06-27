import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MyServiceService } from '../my-service.service';
import { service } from '../service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  service: service={};
  params: HttpParams | undefined;
  subscription: Subscription | undefined;
  servicesList: Array<service> = [];
  constructor(public ser: MyServiceService, private router: Router,private route:ActivatedRoute) {

  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.ser.GetService().subscribe((data) => { this.servicesList = data })
    this.route.params.subscribe((params: Params) => {
    this.service = params;
    });
  }
  closeDetails(){
  this.router.navigate(['services']);
  }


}
