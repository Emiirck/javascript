import { Routes } from '@angular/router'
import { Inicio } from './inicio/inicio';
import { Persona } from './persona/persona';
import { Masculino } from './Estudiante/masculino/masculino';
import { Noencontrada } from './noencontrada/noencontrada';
import { Editarpersona } from './persona/editarpersona/editarpersona';

export const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full' },
    {path:'inicio', component: Inicio},
    {path: 'estudiante', component: Persona},
    {path: 'masculino', component: Masculino},
    {path: 'noencontrada', component: Noencontrada},
    {path: 'editarpersona/:id', component: Editarpersona},
    {path: '**', redirectTo: 'noencontrada', pathMatch: 'full' },
   


];
