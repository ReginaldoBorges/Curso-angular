import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

// Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit() {
    this.foodListService.fooList().subscribe({
      next: (res: any) => (this.foodList = res),
      error: (error: any) => console.log(error),
    });

    this.foodListService.eventEmit.subscribe({
      next: (res: any) => {
        alert(`Adicionado o item => ${res.nome}`);
        return this.foodList.push(res);
      },
      error: (err: any) => alert(`Error reportado => ${err}`),
    });
  }
}
