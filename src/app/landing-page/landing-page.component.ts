import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-landing-page',
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
   ngOnInit(): void {
      
      
      setTimeout (() => {
        this.peliculasEnCine =[{
        titulo: 'El Padrino',
        fechadelanzamiento: new Date(),
        precio: 9.99,
        poster: 'https://image.tmdb.org/t/p/original/ApiEfzSkrqS4m1L5a2GwWXzIiAs.jpg',
      },
      {
        titulo: 'El Padrino II',
        fechadelanzamiento: new Date("1974-01-01"),
        precio: 12.99,
        poster: 'https://th.bing.com/th/id/R.d1b2038d27903ddd7f7b2fd9f0e6434a?rik=o2hvXKv9VSyIxw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-QMUG2R-PNTM%2fT8oqHxClc0I%2fAAAAAAAAAhM%2fCDoI4GsvJF0%2fs1600%2fel-padrino-parte2-poster.jpg&ehk=VyXJIsSZxmWhjKIJaLM%2fIueemV3R3gO%2fU3kFxRqzP%2fo%3d&risl=&pid=ImgRaw&r=0',
      }];
     this.pelicualasProximosEstrenos =[{
        titulo: 'El Padrino III',
        fechadelanzamiento: new Date("1990-01-01"),
        precio: 14.99,
        poster: 'https://1.bp.blogspot.com/-RxVs38HY0Fs/XzUwXxupr6I/AAAAAAAAA_w/TKtfuwPyTrUdl0qviKmj46XF5fmzLa3vgCLcBGAsYHQ/s0/1.gif',
      },
      {
        titulo: 'El Padrino IV',
        fechadelanzamiento: new Date("2024-01-01"),
        precio: 19.99,
        poster: 'https://tse3.mm.bing.net/th/id/OIP.odSkpO3loap4p9fdJ0gcewAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
      }];
    }, 100);
  }
   peliculasEnCine!: any[];
   pelicualasProximosEstrenos!: any[];  
}
