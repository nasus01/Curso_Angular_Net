import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { A11yModule } from "@angular/cdk/a11y";

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent, A11yModule],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

generosSeleccionados: SelectorMultipleDTO[] = [];
generosNoSeleccionados: SelectorMultipleDTO[] = [
  {llave: 1, valor: 'Drama'},
  {llave: 2, valor: 'Acción'},
  {llave: 3, valor: 'Comedia'}

  ];

  cinesSeleccionados: SelectorMultipleDTO[] = [];
cinesNoSeleccionados: SelectorMultipleDTO[] = [
  {llave: 1, valor: 'Mayorca Mall'},
  {llave: 2, valor: 'Puerta del Norte Mall'},
  {llave: 3, valor: 'Fabricato Mall'}

  ];
 
  guardandoCambios(pelicula: PeliculaCreacionDTO){
    console.log('creando pelicula', pelicula);

  }
   
}
