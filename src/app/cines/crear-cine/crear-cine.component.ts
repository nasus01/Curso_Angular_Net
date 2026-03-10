import { Component } from '@angular/core';
import { CineCreacionDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crear-cine',
  standalone: true,
  imports: [FormularioCinesComponent, RouterLink],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css'
})
export class CrearCineComponent {

  guardarCambios(cine:CineCreacionDTO){
    console.log('creando cine',cine);
  }

}


