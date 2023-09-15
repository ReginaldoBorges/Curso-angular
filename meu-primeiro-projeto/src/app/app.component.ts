import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Para passar no lifecycle OnChange"></app-title>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{

  constructor(){ }

  ngOnInit(): void {
    setTimeout( () => {
      console.log("Passou no OnInit");
    }, 5000);
  }

}
