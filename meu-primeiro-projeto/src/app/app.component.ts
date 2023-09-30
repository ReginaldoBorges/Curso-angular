import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
  <app-data-binding></app-data-binding>
  -->
  <!--
    <app-diretivas-estruturais></app-diretivas-estruturais>
  -->

  <app-diretivas-atributos>
    <h1>Aulas de Diretivas Atributo</h1>
    <h3>Final da aula</h3>
  </app-diretivas-atributos>

  <hr color="red">

  <app-diretivas-atributos>
    <h1>Reginaldo</h1>
    <h3>Borges</h3>
  </app-diretivas-atributos>
  
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{

  constructor(){ }

  ngOnInit(): void {
  }
}
