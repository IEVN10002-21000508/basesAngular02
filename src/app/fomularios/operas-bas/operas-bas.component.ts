import { Component } from '@angular/core';
import { values } from 'pdf-lib';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

num1:number=0;
num2:number=0;
res:number=0;
operacion: string = '';

suma(a:number,b:number):void{
this.res = Number(a) + Number(b);
}

resta(a:number,b:number):void{
this.res = Number(a) - Number(b);
}

multiplicar(a:number,b:number):void{
this.res = Number(a) * Number(b);
}

dividir(a:number,b:number):void{
this.res = Number(a) / Number(b);
}

 calcular() {
    if (this.operacion === 'sumar') {
          this.suma(this.num1,this.num2)
    } else if (this.operacion === 'restar') {
          this.resta(this.num1,this.num2)
    } else if (this.operacion === 'multiplicar') {
          this.multiplicar(this.num1,this.num2)
    } else if (this.operacion === 'dividir') {
          this.dividir(this.num1,this.num2)
    }
  }
}


