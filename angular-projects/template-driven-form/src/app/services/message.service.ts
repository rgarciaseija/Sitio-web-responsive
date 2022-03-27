import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // TODO: what's RxjS.Subject?
  messageSubject = new Subject<string>();

  constructor() { }

  add(msg: string) {
    console.log(msg);
    this.messageSubject.next(msg);
  }

  get(): Observable<string> {
    return this.messageSubject.asObservable();
  }

  clear() {
    this.messageSubject.next();
  }
}
