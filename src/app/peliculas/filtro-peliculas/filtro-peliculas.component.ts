import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import{MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { ListadoPeliculasComponent } from "../listado-peliculas/listado-peliculas.component";
import { FiltroPeliculas } from './fitroPelicula';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  standalone:true,
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListadoPeliculasComponent],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit {
  ngOnInit(): void {
    this.leerValoresUrl();
    this.buscarPeliculas(this.form.value as FiltroPeliculas);
   this.form.valueChanges.subscribe(valores =>{
     this.peliculas =this.peliculasOriginal;
     this.buscarPeliculas(valores as FiltroPeliculas)
     this.escribirParametrosBusquedaEnUrl(valores as FiltroPeliculas);
   });
  }
  buscarPeliculas(valores:FiltroPeliculas){
    if (valores.titulo){
      this.peliculas= this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo)!==-1);
    }
    if (valores.generoId!==0){
      this.peliculas= this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId)!==-1);
    }
    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }
    if(valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }

  }
  escribirParametrosBusquedaEnUrl(valores: FiltroPeliculas){
    let queryStrings=[];

    if (valores.titulo){
      queryStrings.push(`titulo=${encodeURIComponent(valores.titulo)}`);
    }
    if (valores.generoId !==0){
      queryStrings.push(`generoId=${(valores.generoId)}`);
    }
    if (valores.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${(valores.proximosEstrenos)}`);
    }
    if (valores.enCines){
      queryStrings.push(`enCines=${(valores.enCines)}`);
    }

    
    this.location.replaceState('peliculas/filtrar',queryStrings.length ? '?' + queryStrings.join('&') : '');
    
  }
  leerValoresUrl(){
    this.activatedRoute.queryParams.subscribe((params: any)=>{
      var objeto: any ={};
      if (params.titulo){
        objeto.titulo = params.titulo;

      }
      if (params.generoId){
        objeto.generoId = Number(params.generoId);
        
      }
      if (params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
        
      }
      if (params.enCines){
        objeto.enCines = params.enCines;
        
      }

      this.form.patchValue(objeto);
    })
  }

  limpiar(){
    this.form.patchValue({titulo:'',generoId:0,proximosEstrenos:false,enCines:false});
  }

  private formBuilder= inject(FormBuilder);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);

  form = this.formBuilder.group({
     

  titulo:'',
  generoId:0,
  proximosEstrenos: false,
  enCines: false 
  })
  generos =[
    {id: 1, nombre: "Drama"},
    {id: 2, nombre: "Accion"},
    {id: 3, nombre: "Comedia"},
  ]
   peliculasOriginal =[{
        titulo: 'El Padrino',
        fechadelanzamiento: new Date(),
        precio: 9.99,
        poster: 'https://image.tmdb.org/t/p/original/ApiEfzSkrqS4m1L5a2GwWXzIiAs.jpg',
        generos:[1,2,3],
        enCines:true,
        proximosEstrenos: false
      },
      {
        titulo: 'El Padrino II',
        fechadelanzamiento: new Date("1974-01-01"),
        precio: 12.99,
        poster: 'https://th.bing.com/th/id/R.d1b2038d27903ddd7f7b2fd9f0e6434a?rik=o2hvXKv9VSyIxw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-QMUG2R-PNTM%2fT8oqHxClc0I%2fAAAAAAAAAhM%2fCDoI4GsvJF0%2fs1600%2fel-padrino-parte2-poster.jpg&ehk=VyXJIsSZxmWhjKIJaLM%2fIueemV3R3gO%2fU3kFxRqzP%2fo%3d&risl=&pid=ImgRaw&r=0',
        generos:[1,2,],
        enCines:true,
        proximosEstrenos: false
      },
    {
        titulo: 'El Padrino III',
        fechadelanzamiento: new Date("1990-01-01"),
        precio: 14.99,
        poster: 'https://1.bp.blogspot.com/-RxVs38HY0Fs/XzUwXxupr6I/AAAAAAAAA_w/TKtfuwPyTrUdl0qviKmj46XF5fmzLa3vgCLcBGAsYHQ/s0/1.gif',
        generos:[1,3],
        enCines:false,
        proximosEstrenos: true
      },
      {
        titulo: 'El Padrino IV',
        fechadelanzamiento: new Date("2024-01-01"),
        precio: 19.99,
        poster: 'https://tse3.mm.bing.net/th/id/OIP.odSkpO3loap4p9fdJ0gcewAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
        generos:[2,3],
        enCines:false,
        proximosEstrenos: true
      }];

      peliculas = this.peliculasOriginal;

}
