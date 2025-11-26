import { Routes } from '@angular/router';
import { OrdenadoresListComponent } from './components/ordenadores-list/ordenadores-list';
import { OrdenadorDetailComponent } from './components/ordenador-detail/ordenador-detail';
import { OrdenadorFormComponent } from './components/ordenador-form/ordenador-form';
import { EditarOrdenadorComponent } from './components/editar-ordenador/editar-ordenador';


export const routes: Routes = [
  { path: '', redirectTo: 'ordenadores', pathMatch: 'full' },
  { path: 'ordenadores', component: OrdenadoresListComponent },
  { path: 'ordenadores/nuevo', component: OrdenadorFormComponent },
  { path: 'ordenadores/:id', component: OrdenadorDetailComponent },   
  { path: 'ordenadores/editar/:id', component: EditarOrdenadorComponent }
];
