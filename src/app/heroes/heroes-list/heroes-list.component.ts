import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',
})
export class HeroesListComponent {

heroes:any[]=[
  {
    "imagen":"https://dragonball-api.com/characters/goku_normal.webp",
    nombre: "goku",
    descripcion :"kakaroto",
    race:"Saiyan",
    ki:9000
  },

  {
    "imagen":"https://dragonball-api.com/characters/vegeta_normal.webp",
    nombre: "Vegeta",
    descripcion :"Principe de los Saiyan",
    race:"Saiyan",
    ki:8500
  },
  {
    "imagen":"https://dragonball-api.com/characters/picolo_normal.webp",
    nombre: "Piccolo",
    descripcion :"Guerrero Namekiano",
    race:"Namekiano",
    ki:700
  },
  {
    "imagen":"https://dragonball-api.com/characters/Freezer.webp",
    nombre: "Freezer",
    descripcion :"Tirano del Universo",
    race:"Alien",
    ki:9500
  }
]
}

