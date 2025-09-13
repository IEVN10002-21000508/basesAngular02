import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular02';

  duplicaNumero(numero:number):number {
    return numero * 2;
  }

  pelicula={
    titulo: "Batman",
    anio: new Date(),
    precio: 2500,
  }

}


export class HeroesListComponent{
heroes:any[]=[
  {
    "imagen":"https://dragonball-api.com/transformaciones/goku_ssj2.webp",
    nombre: "goku",
    descripcion :"kakaroto",
    race:"Saiyan",
    ki:9000
  },

  {
    "imagen":"https://dragonball-api.com/api/characters/1",
    nombre: "Vegeta",
    descripcion :"Principe de los Saiyan",
    race:"Saiyan",
    ki:8500
  },
  {
    "imagen":"https://dragonball-api.com/api/characters/1",
    nombre: "Piccolo",
    descripcion :"Guerrero Namekiano",
    race:"Namekiano",
    ki:700
  },
  {
    "imagen":"https://dragonball-api.com/api/characters/1",
    nombre: "goku",
    descripcion :"kakaroto",
    race:"Saiyan",
    ki:9000
  },
]
}
