import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { feedback } from '../feedback';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackList: Array<feedback> = [];

  constructor(public ser: MyServiceService, private router: Router) {

  }
  ngOnInit(): void {
    this.ser.GetFeedback().subscribe((data) => { this.feedbackList = data })

  }
  addFeedback() {
    this.router.navigate(['new-feedback']);
  }
  addLike(f:feedback){
      f.countLikes++;
      this.ser.PutFeedback(f).subscribe();
  }
}
