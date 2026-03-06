import { NgClass } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-rating',
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
 
  @Input({ required: true,transform:(valor:number)=>Array(valor).fill(0) }) 
  MaximoRating!: number[];

  @Input( )
  RatingSeleccionado: number = 0;

  @Output()
  Votando = new EventEmitter<number>();
  
  ratingAnterior: number = 0;
  ManejarMouseEnter(index: number){
    this.RatingSeleccionado = index + 1;
  }
  ManejarMouseLeave(){
    if(this.ratingAnterior !== 0){
      this.RatingSeleccionado = this.ratingAnterior;
    }else{
      this.RatingSeleccionado = 0;
    }
  
  }

  ManejarClick(index: number){
    this.RatingSeleccionado = index + 1;
    this.ratingAnterior = this.RatingSeleccionado;
    this.Votando.emit(this.RatingSeleccionado);
  }
}
