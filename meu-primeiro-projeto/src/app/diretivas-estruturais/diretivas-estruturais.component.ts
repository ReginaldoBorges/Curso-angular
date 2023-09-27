import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent{

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{nome:string, idade:number}> = [
    {nome: "Reginaldo", idade: 43},
    {nome: "Borges", idade: 34},
  ];

  constructor(){}

  ngOnInit():void {

    /**
     * Utilizando a propriedade setInterval, com auxiliar, 
     * para alternar o valor da condição a cada 2 segundos.
     */
    setInterval( () => {
      if (this.condition) {
        this.condition = false;
      }else{
        this.condition = true;
      }
    }, 2000)
  }

  /**
   * Função chamada do botão Clique para alternar o valor da condição.
   */
  public onClick(){
    if (this.conditionClick) {
      this.conditionClick = false;
    } else{
      this.conditionClick = true;
    }
  }

  /**
   * Função chamada do botão Adicionar para inserir novo elemento à lista
   */
  public onClickAddList() {
    this.list.push({nome: "Paulo", idade: 35});
  }

  /**
   * Função chamada do envento click do item para remover intem da lista
   */
  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }

}
