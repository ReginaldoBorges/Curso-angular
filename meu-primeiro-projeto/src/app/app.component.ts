import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
  <app-data-binding></app-data-binding>

   <app-diretivas-estruturais></app-diretivas-estruturais>

  <app-diretivas-atributos>
    <h1>Aulas de Diretivas Atributo</h1>
    <h3>Final da aula</h3>
  </app-diretivas-atributos>

  <hr color="red">

  <app-diretivas-atributos>
    <h1>Reginaldo</h1>
    <h3>Borges</h3>
  </app-diretivas-atributos>

    <app-new-component></app-new-component>

  <app-input [contador]="addValue"></app-input>
  <button (click)="Add()">Add</button>
  -->
  <app-output></app-output>

  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{

  public addValue:number = 1;

  constructor(){ }

  ngOnInit(): void {
  }
 
  public Add(){
    this.addValue += 1;
  }

}
