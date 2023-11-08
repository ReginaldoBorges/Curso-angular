import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public eventEmit = new EventEmitter();

  private list: Array<string> = [
    "X Bacon",
    "Feijão",
    "Ovos"
  ]

  constructor() { }

  public fooList() {
    return this.list
  }

  public foodListAdd(value: string) {
   this.eventListAlert(value);
    this.list.push(value);
  }

  public eventListAlert(value: string) {
    return this.eventEmit.emit(value);
  }
}
