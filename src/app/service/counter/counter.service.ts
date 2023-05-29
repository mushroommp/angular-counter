import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  addCounter = (count: number) => {
    count += 1
    return count
  }
}
