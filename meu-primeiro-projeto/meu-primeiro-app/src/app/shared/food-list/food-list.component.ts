import { Component, OnInit } from '@angular/core';

// Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit{
  
  public foodList: Array<string> = [];

  constructor( private foodListService: FoodListService ) {}

  ngOnInit() {
    this.foodList = this.foodListService.fooList();

    this.foodListService.eventEmit.subscribe({
        next: (res: any) => alert(`Adicionando item => ${res}`),
        error: (err: any) => alert(`Error reportado => ${err}`),
    });
  }
}
