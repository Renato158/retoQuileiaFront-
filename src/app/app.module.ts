import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { TuristasComponent } from './components/turistas/turistas.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { FormTuristaComponent } from './components/form-turista/form-turista.component';
import { FormCiudadComponent } from './components/form-ciudad/form-ciudad.component';
import { AsignacionesComponent } from './components/asignaciones/asignaciones.component';
import { FormAsignacionesComponent } from './components/form-asignaciones/form-asignaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TuristasComponent,
    CiudadesComponent,
    FormTuristaComponent,
    FormCiudadComponent,
    AsignacionesComponent,
    FormAsignacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
