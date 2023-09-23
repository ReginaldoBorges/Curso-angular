import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  // Propriedades dos data binding Interpolation
  public nome: string = "Borges";
  public idade: number = 43;
  public maisUm: number = 1 ;

// Propriedades do data bindig Property binding
public checkedDisabled: boolean = true;
public imgSrc: string = "https://vidafullstack.com.br/wp-content/uploads/2021/01/como-criar-site.jpg"
public imgTitle: string = "Property binding"

// Propriedade do data bindig Event binding
public position: {x: number, y: number} = {x: 0, y: 0};

  constructor(){}

  ngOnint():void {

  }

  /**
   * Função chamada a partir do evento click do botão
   */
  public alertInfo():void {
     alert("Valor não foi passado pelo evento!");
   }

  /**
   * Função chamada a partir do evento click do botão e recebendo um valor
   */
  public alertValor(valor: string):void {
    alert(valor);
  }

  /**
   * Função chamada a partir do evento mousemove da div e recebendo as características
   */
  public mouseMoveTest(valor: MouseEvent):void {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
