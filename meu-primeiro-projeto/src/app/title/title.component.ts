import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

@Input() public title:string = "Bem vindo";

  constructor() { }
  ngOnChanges(): void {
    console.log("Passou no OnChange");
  }

  ngOnInit(): void {
  }

}
