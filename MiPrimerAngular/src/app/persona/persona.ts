import { Component } from '@angular/core';
import { Masculino } from '../Estudiante/masculino/masculino';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persona',
  imports: [Masculino, RouterLink, FormsModule],
  templateUrl: './persona.html',
  styleUrl: './persona.css',
})
export class Persona {

  id: number = 0;
  nombre: string = ""
  apellido: string = ""
  edad: number = 0

  estudiante : any[] = [
    {id : 0, nombre: "Emirck", apellido: "Candelo", edad: 21} ,
    {id : 1, nombre: "Jhon", apellido: "Gonzales", edad: 22} ,
    {id : 2, nombre: "Chantal", apellido: "Peñafiel", edad: 19},
    {id : 3, nombre: "Carlos", apellido: "Mantilla", edad: 23},
    {id : 4, nombre: "Alfredo", apellido: "Ordoñez", edad: 21} ,
    {id : 5, nombre: "Kevin", apellido: "Lozano", edad: 20},
    {id : 6, nombre: "Carlos", apellido: "Ramirez", edad: 22}
  ];

  eliminar(index: number){
    this.estudiante.splice(index, 1);
  }

  guardarEstudiante(){
    let persona: any = {
      id: this.id,
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad
    }
    this.estudiante.push(persona);
    console.log("La persona tiene estos datos: ", JSON.stringify(persona));
  }



}