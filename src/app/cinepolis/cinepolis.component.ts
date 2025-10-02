import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})


export class CinepolisComponent {

  nombre: string = "";
  precio: number = 0;
  cantidadboletos: number = 0;
  cantidadpersonas: number = 0;
  opcion: string = "";
  total: number = 0;
  porcentaje1: number = 0;
  porcentaje2: number = 0;
  porcentaje3: number = 0;

  precioboleto(): void {
    var precioBoleto = 12;
    this.total = this.cantidadboletos * precioBoleto;
  }

  descuento(): void {
    this.porcentaje1 = this.total * 0.15;
    this.porcentaje2 = this.total * 0.10;
    this.porcentaje3 = this.total * 0.10;
  }

  procesar(): void {
    var maximoBoletosPermitido = this.cantidadpersonas * 7;

    if (this.cantidadboletos > maximoBoletosPermitido) {
      alert("¡La cantidad total de boletos excede el límite de 7 boletos por comprador! Máximo permitido: " + maximoBoletosPermitido);
      this.precio = 0;
      return;
    }

    this.precioboleto();
    this.descuento();

    this.precio = this.total;

    var descuentoPorCantidad = 0;

    if (this.cantidadboletos > 5) {
      descuentoPorCantidad = this.porcentaje1;
    } else if (this.cantidadboletos >= 3 && this.cantidadboletos <= 5) {
      descuentoPorCantidad = this.porcentaje2;
    } else {
      descuentoPorCantidad = 0;
    }

    this.precio = this.precio - descuentoPorCantidad;

    if (this.opcion === 'si') {
      var descuentoCinecardMonto = this.precio * 0.10;
      this.precio = this.precio - descuentoCinecardMonto;
    }
  }

  salir(): void {
    console.log("Gracias por su visita");
  }
}
