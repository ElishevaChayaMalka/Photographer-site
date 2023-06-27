import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { feedback } from '../feedback';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.component.html',
  styleUrls: ['./new-feedback.component.scss']
})
export class NewFeedbackComponent implements OnInit {
  f: feedback = {
    email: "", name: "", feedb: "", phone: "", countLikes: 0,
  };

  constructor(private http: HttpClient, public ser: MyServiceService, private roter: Router) {

  }
  loginForm!: FormGroup;
  ngOnInit(): void {
    if (this.ser.getGift.value === this.ser.thank) {
      this.ser.onSendFeedback(this.ser.addFeedback);
    }

    this.loginForm = new FormGroup({
      name: new FormControl(),
      feedb: new FormControl(),
      phone: new FormControl("", [Validators.minLength(9), Validators.maxLength(10)]),
      email: new FormControl("", [Validators.email]),
      countLikes: new FormControl()
    });
  }

  submit() {
    let n, p;
    n = new Object();
    n = this.loginForm.value;
    if (!n.email.toString().includes('@gmail.com')) {
      const v = document.querySelector(".invalid-feedbackEmail") || document.createElement('h1');
      v.innerHTML = "כתובת האמייל לא חוקית"
    }
    if (n.email.toString().includes('@gmail.com')) {
      const v = document.querySelector(".invalid-feedbackEmail") || document.createElement('h1');
      v.innerHTML = ""
    }
    if (this.loginForm.valid) {

      this.f.email = this.loginForm.controls['email'].value;
      this.f.name = this.loginForm.controls['name'].value;
      this.f.phone = this.loginForm.controls['phone'].value;
      this.f.feedb = this.loginForm.controls['feedb'].value;
      this.f.countLikes = this.loginForm.controls['countLikes'].value;
      this.ser.PostFeedback(this.f).subscribe();
      this.ser.onSendFeedback(this.ser.thank);
    }
    else {
      alert("אחד או יותר מהפרטים לא חוקיים!!");
    }
  }

}
