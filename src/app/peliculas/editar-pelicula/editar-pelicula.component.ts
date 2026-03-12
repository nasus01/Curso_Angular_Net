import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';

@Component({
  selector: 'app-editar-pelicula',
  standalone: true,
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({transform: numberAttribute})
  id!: number;

  pelicula: PeliculaDTO = {id: 1, titulo: 'Spider-Man', trailer:'ABC', fechaLanzamiento: new Date('2026-03-20'),poster:'https://www.bing.com/search?q=The+Amazing+Spider-Man+2%3a+El+poder+de+Electro+2014&FORM=SNAPST&filters=sid:%2251f24683-e64f-48d3-9298-d5936a14a53e%22+fcid:%22GeneratedCarousel-923680a5-f1f2-4d9f-b0b5-0e23425f75a9%22'}

  generosSeleccionados:   SelectorMultipleDTO[] = [
    {llave: 2, valor: 'Acción'},
  ];
  generosNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 3, valor: 'Comedia'}
  
    ];
     cinesSeleccionados: SelectorMultipleDTO[] = [
      {llave: 2, valor: 'Puerta del Norte Mall'}
     ];
cinesNoSeleccionados: SelectorMultipleDTO[] = [
  {llave: 1, valor: 'Mayorca Mall'},
  
  {llave: 3, valor: 'Fabricato Mall'}

  ];
    
  guardarCambios(pelicula:PeliculaCreacionDTO){
    console.log('editando pelicula', pelicula);
    
  }

}
