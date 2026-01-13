import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-editarpersona',
  imports: [],
  templateUrl: './editarpersona.html',
  styleUrl: './editarpersona.css',
})
export class Editarpersona implements OnInit {

  id!: string | number;
  constructor(private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id') as unknown as number;
    console.log("Obteniendo el id de la ruta: ", this.id);
  }
}
