import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

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
    this.list.push(value);
  }

}
