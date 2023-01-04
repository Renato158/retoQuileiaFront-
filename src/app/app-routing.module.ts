import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignacionesComponent } from './components/asignaciones/asignaciones.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { FormAsignacionesComponent } from './components/form-asignaciones/form-asignaciones.component';
import { FormCiudadComponent } from './components/form-ciudad/form-ciudad.component';
import { FormTuristaComponent } from './components/form-turista/form-turista.component';
import { IndexComponent } from './components/index/index.component';
import { TuristasComponent } from './components/turistas/turistas.component';

const routes: Routes = [
  { path: 'turistas', component: TuristasComponent},
  { path: 'ciudades', component: CiudadesComponent},
  { path: 'formTurista', component: FormTuristaComponent},
  { path: 'formCiudad', component: FormCiudadComponent},
  { path: 'asignaciones', component: AsignacionesComponent},
  { path: 'formAsignaciones', component: FormAsignacionesComponent},
  { path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
