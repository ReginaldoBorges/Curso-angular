import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public eventEmit = new EventEmitter();

  private url: string = "http://localhost:3000/"; // list-food

  private list: Array<string> = [
    "X Bacon",
    "Feijão",
    "Ovos"
  ]

  constructor(private http: HttpClient) { }

  // public fooList() {
  //   return this.list
  // }

  public fooList(): Observable<FoodList> {
    return this.http.get<FoodList>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    );
  }

  public foodListAdd(value: string) {
   this.eventListAlert(value);
    this.list.push(value);
  }

  public eventListAlert(value: string) {
    return this.eventEmit.emit(value);
  }
}
