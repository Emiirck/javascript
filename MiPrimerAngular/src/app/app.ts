import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Persona } from "./persona/persona";
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Persona, CommonModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tituloPeriodico: string = "EL Universo";

  persona : any[] = [
    {nombre: "Juan"},
    {nombre: "Ana"} ,
    {nombre: "Luis"}
  ];

  valorTotal: number = 8;
  variableTexto: string = "Juanito";
  variableTextominusculas: string = "juanito";

  edad= 20;

  estudiante : any[] = [
    {id : 0, nombre: "Emirck", apellido: "Candelo", edad: 21} ,
    {id : 1, nombre: "Jhon", apellido: "Gonzales", edad: 22} ,
    {id : 2, nombre: "Chantal", apellido: "Peñafiel", edad: 19},
    {id : 3, nombre: "Carlos", apellido: "Mantilla", edad: 23},
    {id : 4, nombre: "Alfredo", apellido: "Ordoñez", edad: 21} ,
    {id : 5, nombre: "Kevin", apellido: "Lozano", edad: 20},
    {id : 6, nombre: "Carlos", apellido: "Ramirez", edad: 22}
  ];

  DiasSemana : any[] = [
    {id:1, Dia: "Lunes"},
    {id:2, Dia: "Martes"},
    {id:3, Dia: "Miércoles"},
    {id:4, Dia: "Jueves"},
    {id:5, Dia: "Viernes"},
    {id:6, Dia: "Sábado"},
    {id:7, Dia: "Domingo"}
  ];
  
}