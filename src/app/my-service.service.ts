import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { feedback } from './feedback';
import { service } from './service';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  thank: string = "💗תודה שהגבת , הנך זכאי למתנה....";
  addFeedback: string = "🎁בהוספת תגובה תהיה זכאי למתנה";
  getGift = new BehaviorSubject<string>(this.addFeedback);

  env: string = 'https://localhost:44338/api';
  constructor(private http: HttpClient) { }
  GetFeedback(): Observable<feedback[]> {
    return this.http.get<feedback[]>(this.env + '/feedback');
  }
  GetService(): Observable<service[]> {
    return this.http.get<service[]>(this.env + '/services')
  }
  PostFeedback(f: feedback): Observable<feedback[]> {
    return this.http.post<feedback[]>(this.env + '/feedback', f);
  }
  PutFeedback(f: feedback): Observable<feedback[]> {
    return this.http.put<feedback[]>(this.env + '/feedback', f);
  }
  onSendFeedback(s: string) {
    
    this.getGift.next(s);
  }
}
