import { Component } from '@angular/core';
import { Femenino } from "../femenino/femenino";

@Component({
  selector: 'app-masculino',
  imports: [Femenino],
  templateUrl: './masculino.html',
  styleUrl: './masculino.css',
})
export class Masculino {

}
