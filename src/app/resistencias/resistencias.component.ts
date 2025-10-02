import { Component } from '@angular/core';
import { Resistencia } from './resistencias1';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {

  bandaColores: Resistencia[] = [
    new Resistencia("Negro", "#000000", 0, 1, 0),
    new Resistencia("Café", "#6C2C01", 1, 10, 0),
    new Resistencia("Rojo", "#DD2B2B", 2, 100, 0),
    new Resistencia("Naranja", "#FF8401", 3, 1000, 0),
    new Resistencia("Amarillo", "#FEF100", 4, 10000, 0),
    new Resistencia("Verde", "#45AC00", 5, 100000, 0),
    new Resistencia("Azul", "#2962B8", 6, 1000000, 0),
    new Resistencia("Violeta", "#5C19A4", 7, 10000000, 0),
    new Resistencia("Gris", "#9A9A9A", 8, 100000000, 0),
    new Resistencia("Blanco", "#FFFFFF", 9, 1000000000, 0),
  ];

  tolerancias: Resistencia[] = [
    new Resistencia("Dorado", "#FFD700", 0, 1, 0.05),
    new Resistencia("Plateado", "#C0C0C0", 0, 1, 0.10),
  ];

  // ✅ Inicializamos con un valor por defecto
  banda1: Resistencia = this.bandaColores[0];
  banda2: Resistencia = this.bandaColores[0];
  banda3: Resistencia = this.bandaColores[0];
  tol: Resistencia = this.tolerancias[0];

  valor: number = 0;
  valorMax: number = 0;
  valorMin: number = 0;

  mostrarResultado: boolean = false;

  seleccionarColor(banda: 'banda1' | 'banda2' | 'banda3' | 'tol', color: Resistencia): void {
    this[banda] = color;
    this.mostrarResultado = false; // hasta calcular no se ve
  }

  calcular() {
    this.valor = Resistencia.calcularValor(this.banda1, this.banda2, this.banda3);
    this.valorMax = Resistencia.calcularMaximo(this.valor, this.tol);
    this.valorMin = Resistencia.calcularMinimo(this.valor, this.tol);

    this.mostrarResultado = true;
  }
}
