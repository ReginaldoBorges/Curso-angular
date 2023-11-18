import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviaDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    {nome: "Borges", idade: 43},
    {nome: "Rosi", idade: 41},
    {nome: "José", idade: 58}
  ]

  constructor() {}

  ngOnInit(): void {
  }

  public getDados(index: number) {
    this.enviaDados.emit(this.list[index]);
  }

}
