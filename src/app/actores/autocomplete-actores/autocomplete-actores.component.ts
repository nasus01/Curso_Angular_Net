import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable, MatTableModule} from '@angular/material/table';
import { actorAutoCompleteDTO } from '../actores';
import {CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-autocomplete-actores',
  standalone: true,
  imports: [MatAutocompleteModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatIconModule, FormsModule, MatTableModule,
    DragDropModule
  ],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent {

   control = new FormControl();

   actores: actorAutoCompleteDTO[]=[{
    id: 1, nombre: 'Tom Holland', personaje: '', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tom_Holland_MTV_2018_%2801%29.jpg/500px-Tom_Holland_MTV_2018_%2801%29.jpg'},{
    id: 2, nombre: 'Tom Hanks', personaje: '', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg/500px-TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg'},{
    id: 3, nombre: 'Samuel L Jackson', personaje: '', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SamuelLJackson.jpg/500px-SamuelLJackson.jpg'}
  
  ]
    @Input({required:true})
    actoresSeleccionados:  actorAutoCompleteDTO[]=[];

    columnasAmostrar= ['imagen','nombre','personaje','acciones'];
     @ViewChild(MatTable)  table!: MatTable<actorAutoCompleteDTO>;
  actorSeleccionado(event: MatAutocompleteSelectedEvent){
    this.actoresSeleccionados.push({...event.option.value});
    this.control.patchValue('');

    if(this.table != undefined){
      this.table.renderRows();
    }

  }

  finalizarArrastre( event: CdkDragDrop<any[]> ){
    const indicePrevio = this.actoresSeleccionados.findIndex(actor => actor === event.item.data);
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
    this.table.renderRows();

  }

  eliminar(actor: actorAutoCompleteDTO){

    const indice = this.actoresSeleccionados.findIndex((a: actorAutoCompleteDTO)=> a.id === actor.id);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();

  }

}
