import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  public nome: string = "Borges";
  public idade: number = 43;
  public maisUm: number = 1 ;

  constructor(){}

  ngOnint():void {

  }

}
