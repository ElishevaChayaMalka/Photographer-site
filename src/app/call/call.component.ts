import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent {
  constructor(private router: Router) {

  }
  onClick() {
    alert("הפרטים נשלחו למערכת ‼️")
    this.router.navigate(['/home']);
  }
}
