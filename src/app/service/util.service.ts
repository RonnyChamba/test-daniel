import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {


  private subject = new Subject<any>();
  constructor() { }


  get observable() {
    return this.subject;

  
  }
}
