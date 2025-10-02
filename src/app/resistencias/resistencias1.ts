export class Resistencia {
  nombre: string;
  colorHex: string;
  valor: number;
  multiplicador: number;
  tolerancia: number;


  constructor(nombre: string, colorHex: string, valor: number, multiplicador: number, tolerancia: number) {
    this.nombre = nombre;
    this.colorHex = colorHex;
    this.valor = valor;
    this.multiplicador = multiplicador;
    this.tolerancia = tolerancia;
  }


  static calcularValor(b1: Resistencia, b2: Resistencia, b3: Resistencia): number {
    const base = Number(`${b1.valor}${b2.valor}`);
    return base * b3.multiplicador;
  }

  static calcularMaximo(valor: number, tol: Resistencia): number {
    return valor + (valor * tol.tolerancia);
  }

  static calcularMinimo(valor: number, tol: Resistencia): number {
    return valor - (valor * tol.tolerancia);
  }
}

