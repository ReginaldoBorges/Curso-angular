import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Para passar no lifecycle OnChange"></app-title>
    <button (click) = "Adicionar()">Adicionar</button>
    {{ valor }}
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

  public valor:number = 1;

  constructor(){ }

  ngOnInit(): void {
    // setTimeout( () => {
       console.log("Passou no OnInit");
    // }, 5000);
  }

  ngDoCheck(): void {
    console.log("ngDoChecked");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  public Adicionar():number {
    return this.valor += 1;
  }

}
