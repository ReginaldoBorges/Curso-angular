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

  <ng-template [ngIf]="objetoPessoa">
    <h1>{{objetoPessoa.nome}}</h1>
    <h2>{{objetoPessoa.idade}}</h2>
  </ng-template>

  <app-output (enviaDados)="getDados($event)"></app-output>
-->

  <app-food-list></app-food-list>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{

  public addValue:number = 1;

  public objetoPessoa: {nome: string, idade:number} | undefined;

  constructor(){ }

  ngOnInit(): void {
  }
 
  public Add(){
    this.addValue += 1;
  }

  public getDados(eventObjeto: {nome: string, idade:number}):void {
    this.objetoPessoa = eventObjeto;
  }

}
