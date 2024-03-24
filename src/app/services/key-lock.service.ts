import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KeyLockService {

  private numbersArray = ['X', 'X', 'X'];
  private numbersSubject;
  numbers ;
  numbersKey = 'localKeyNumbers';

  constructor() {
    let numbersFromStorage = localStorage.getItem(this.numbersKey);
    if(numbersFromStorage){
      this.numbersArray = JSON.parse(numbersFromStorage);
    }
    this.numbersSubject = new BehaviorSubject<string[]>(this.numbersArray.slice());
    this.numbers = this.numbersSubject.asObservable();
  }

  pushNumber(number: string) {
    let index = this.numbersArray.findIndex(v => v === 'X');
    if (index !== undefined) {
      this.numbersArray[index] = number;
    }
    this.numbersSubject.next(this.numbersArray.slice());
    localStorage.setItem(this.numbersKey, JSON.stringify(this.numbersArray));
  }
}
