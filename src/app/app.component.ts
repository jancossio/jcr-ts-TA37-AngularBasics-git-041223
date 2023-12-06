import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jcr-ts-TA37-AngularBasics-git-041223';

  public calculo:string = '';
  private operador1:number = 0;
  private signoOperante:string = '';
  private escribir:boolean = false;

  agregarValor(valor:string){

    if(this.signoOperante === ''){
        this.calculo = this.calculo + valor;
    }else if(!this.escribir){
        this.calculo = "";
        this.calculo = this.calculo + valor;
        this.escribir=true;
    }else{
        this.calculo = this.calculo + valor;
    }
  }

  operacion(operando:string){ 
    this.operador1 = parseFloat(this.calculo);
    this.signoOperante = operando;
}

  calcular(){

    const operador2:number = parseFloat(this.calculo);

    switch (this.signoOperante) {
        case "+":
            this.calculo = (this.operador1+operador2).toString();
            break;      
        case "-":
            this.calculo =  (this.operador1-operador2).toString();
            break;    
        case "x":
            this.calculo =  (this.operador1*operador2).toString();
            break;    
        case "/":     
            if (operador2 == 0.0) {
                this.calculo="INFINITY";
            }else{
                this.calculo =  (this.operador1/operador2).toString();
            }
            break;
        default:
            this.calculo="Error";
        }
        this.escribir = false;
}

borrar(){
    this.signoOperante = "";
    this.calculo = "";
    this.operador1 = 0;
    this.escribir = false;
}
}