import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent {

  public valor: boolean = true;
  public heigthPx: string = "20px";
  public backgroundColor: string = "red";
  public nomeInput: string = "Borges";
  public list: Array<{nome: string}> = [];

  constructor(){}

  ngOnInit(){
    setInterval( ()=> {
      if(this.valor) {
        this.valor = false;
      } else {
        this.valor = true;
      }

      if(this.heigthPx == "20px") {
        this.heigthPx = "50px";
        this.backgroundColor = "blue";
      } else {
        this.heigthPx = "20px";
        this.backgroundColor = "red";
      }

    }, 2000);

  }

  public salvar():void {
    this.list.push({nome: this.nomeInput});
  }
}
