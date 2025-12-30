import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Persona } from "./persona/persona";
import { Femenino } from "./Estudiante/femenino/femenino";
import { Masculino } from "./Estudiante/masculino/masculino";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Persona, Femenino, Masculino],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MiPrimerAngular');
}
