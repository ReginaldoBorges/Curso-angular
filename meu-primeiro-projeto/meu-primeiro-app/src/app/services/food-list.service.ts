import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Module Interface
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  public eventEmit = new EventEmitter();

  private url: string = 'http://localhost:3000/'; // list-food

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // private list: Array<string> = ['X Bacon', 'Feijão', 'Ovos'];

  constructor(private http: HttpClient) {}

  // public fooList() {
  //   return this.list
  // }

  public fooList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      (res) => res,
      (error) => error
    );
  }

  // public foodListAdd(value: string) {
  //   this.foodListAlert(value);
  //   this.list.push(value);
  // }

  public foodListAdd(value: string): Observable<Array<FoodList>> {
    return this.http
      .post<Array<FoodList>>(
        `${this.url}list-food`,
        { nome: value },
        this.httpOptions
      )
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public foodListEdit(value: string, id: number): Observable<Array<FoodList>> {
    return this.http
      .put<Array<FoodList>>(
        `${this.url}list-food/${id}`,
        { nome: value },
        this.httpOptions
      )
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public foodListDelete(id: number): Observable<Array<FoodList>> {
    return this.http
      .delete<Array<FoodList>>(`${this.url}list-food/${id}`, this.httpOptions)
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  // public foodListAlert(value: string) {
  //   return this.foodEmit.emit(value);
  // }

  public foodListAlert(value: FoodList) {
    return this.eventEmit.emit(value);
  }
}
