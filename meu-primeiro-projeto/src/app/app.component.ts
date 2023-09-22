import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf = "destruir" title="Para passar no lifecycle OnChange">
    </app-title>
    <button (click) = "Adicionar()">Adicionar</button>
    {{ valor }}

    <br><br>
    <button (click)="destruirComponente()">Destruir componente</button>

    <br><br>
    <button (click)="restaurarComponente()">Restaurar componente</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

  public valor:number = 1;
  public destruir: boolean = true;

  constructor(){ }

  ngOnInit(): void {
    // setTimeout( () => {
       console.log("Passou no OnInit app.component");
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

  // ngOnDestroy() e exemplificado no componente title.componet

  public Adicionar():number {
    return this.valor += 1;
  }

  public destruirComponente():void {
    this.destruir = false;
  }

  public restaurarComponente():void {
    this.destruir = true;
  }

}
