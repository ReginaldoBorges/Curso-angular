import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  public listComidas: Array<{ comida: string; preco: number }> = [
    { comida: 'X-Salada', preco: 10.0 },
    { comida: 'X-Bacon', preco: 11.0 },
    { comida: 'Coxinha', preco: 12.0 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
