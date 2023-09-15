import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

@Input() public title:string = "Bem vindo";

  ngOnInit(): void {
  }

  constructor() { }
  ngOnChanges(): void {
    console.log("Passou no OnChange");
  }

}
