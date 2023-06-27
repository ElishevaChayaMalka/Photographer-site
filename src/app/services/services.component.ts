import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { feedback } from '../feedback';
import { MyServiceService } from '../my-service.service';
import { service } from '../service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  style:string="service";
  index:number=1;

  // @Output()
  // moreDeatails: EventEmitter<service> = new EventEmitter();


  servicesList: Array<service> = [];

  constructor(public ser: MyServiceService, private router: Router) {

  }
  ngOnInit(): void {
    this.ser.GetService().subscribe((data) => { this.servicesList = data })
  }
  moreDetails(item:service) {
    this.router.navigate(['services/details',item]);
  }
}
//  myModel = document.getElementById('myModal');
//  myInput = document.getElementById('myInput');

// onClick(){

// }
// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// });

// <div class="modal" tabindex="-1">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         <p>Modal body text goes here.</p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>

